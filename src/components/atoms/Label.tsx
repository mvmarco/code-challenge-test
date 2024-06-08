import { ComponentPropsWithRef, FC, ReactElement } from 'react';
import styled from 'styled-components';

interface LabelProps extends ComponentPropsWithRef<'label'> {
  children?: ReactElement;
  text: string;
  htmlFor?: string;
  disabled?: boolean;
}

const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  color: ${({ disabled }) => (disabled ? '#9CA3AF' : 'inherit')};
`;

const LabelText = styled.span`
  padding-left: 0.5rem;
  font-size: 0.75rem;
`;

export const Label: FC<LabelProps> = ({ children, text, className, disabled, ...props }) => {
  return (
    <StyledLabel disabled={disabled} className={className} {...props}>
      <LabelText>{text}</LabelText>
      {children}
    </StyledLabel>
  );
};
