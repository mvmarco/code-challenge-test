import { PlusIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import { useBoolean } from 'usehooks-ts';
import styled from 'styled-components';

import { NewImageDialog } from './NewImageDialog';
import { PrimaryButton } from '../../atoms/buttons/PrimaryButton';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;

const StyledPlusIcon = styled(PlusIcon)`
  height: 1.5rem;
  color: white;
`;

export const ImagesHeader: FC = () => {
  const { value: isNewImageDialogOpen, setTrue: openNewImageDialog, setFalse: closeNewImageDialog } = useBoolean(false);

  return (
    <HeaderContainer>
      <Title>Images Management</Title>
      <PrimaryButton type="submit" onClick={openNewImageDialog}>
        <StyledPlusIcon/>
        Add New Image
      </PrimaryButton>
       <NewImageDialog open={isNewImageDialogOpen} onClose={closeNewImageDialog} />
    </HeaderContainer>
  );
};
