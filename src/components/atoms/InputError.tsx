import { ComponentPropsWithRef, FC } from 'react';
import styled from 'styled-components';

interface InputErrorProps extends ComponentPropsWithRef<'div'> {
  errorMessage?: string;
}

const StyledInputError = styled.div`
  position: relative;
  margin-top: 0.5rem;
  border-radius: 1rem;
  background-color: #f6e0e0;
  padding: 0.55rem;
  font-size: 0.875rem;
  text-transform: capitalize;
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.16));

  &:after,
  &:before {
    content: '';
    position: absolute;
    left: 16px;
    top: -16px;
    border-top: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #f6e0e0;
    border-left: 8px solid transparent;
  }
`;

export const InputError: FC<InputErrorProps> = ({ errorMessage, ...props }) => {
  return errorMessage ? (
    <StyledInputError role="alert" {...props}>
      {errorMessage}
    </StyledInputError>
  ) : null;
};
