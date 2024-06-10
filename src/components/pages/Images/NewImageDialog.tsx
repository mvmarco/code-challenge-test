import { yupResolver } from '@hookform/resolvers/yup';
import { Dialog, DialogPortal } from '@radix-ui/react-dialog';
import { FC, FormEventHandler } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { type InferType } from 'yup';
import styled from 'styled-components';

import { useCreateImageMutation } from '../../../redux/api/imagesSlice';
import { SecondaryButton } from '../../atoms/buttons/SecondaryButton';
import { setFormErrors } from '../../../utils/formHelpers';
import { PrimaryButton } from '../../atoms/buttons/PrimaryButton';
import { InputField } from '../../molecules/inputField/index';

const schema = yup
  .object({
    title: yup.string().label('Title').required().max(30, 'Title must be at most 30 characters'),
    description: yup.string().label('Description').required().max(30, 'Description must be at most 30 characters'),
    imagePath: yup.string().label('Image Path').url().required(),
  })
  .required();

type Inputs = InferType<typeof schema>;

export interface DialogProps {
  open: boolean;
  onClose: (value: boolean) => void;
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 30px 20px;
  width: 350px;
  margin: 100px auto;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 30px;
`;


export const NewImageDialog: FC<DialogProps> = ({ open, onClose }) => {
  const {
    reset: resetForm,
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<Inputs>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onDialogClose = (value: boolean) => {
    resetForm();
    onClose(value);
  };

  const [createImage, { isLoading }] = useCreateImageMutation();

  const onSubmit: FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();
    void handleSubmit(async (formData) => {
      try {
        await createImage(formData);
        onDialogClose(false);
        toast.success('Image created', {
          position: 'bottom-center',
          autoClose: 8000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      } catch (error: any) {
        setTimeout(
          () =>
            setFormErrors({
              error,
              setError,
              fields: Object.keys(schema.fields),
            }),
          50,
        );
      }
    })(event);
  };

  return (
    <Dialog open={open} onOpenChange={onDialogClose}>
      <DialogPortal>
        <Overlay onClick={() => onDialogClose(false)}>
          <Content onClick={(e) => e.stopPropagation()}>
            <Title>Add New Image</Title>
            <form onSubmit={onSubmit} autoComplete="off">
              <InputWrapper>
                <InputField
                  {...register('title')}
                  label="Title"
                  errorMessage={errors.title?.message}
                />
                <InputField
                  {...register('description')}
                  label="Description"
                  errorMessage={errors.description?.message}
                />
                <InputField
                  {...register('imagePath')}
                  label="Image Path"
                  errorMessage={errors.imagePath?.message}
                />
              </InputWrapper>
              <ButtonGroup>
                <SecondaryButton
                  size="large"
                  type="button"
                  onClick={() => onDialogClose(false)}
                >
                  Cancel
                </SecondaryButton>
                <PrimaryButton
                  size="large"
                  type="submit"
                  disabled={isLoading}
                  aria-label="Add New Image"
                >
                  Save Changes
                </PrimaryButton>
              </ButtonGroup>
            </form>
          </Content>
        </Overlay>
      </DialogPortal>
    </Dialog>
  );
};
