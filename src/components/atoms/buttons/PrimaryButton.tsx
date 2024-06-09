import { ForwardedRef, forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { ButtonProps } from './Button';

const sizes = {
  small: css`
    height: 2.25rem;
    font-size: 0.875rem;
    padding: 0 1.25rem;

    @media (max-width: 768px) {
      height: 2rem;
      font-size: 0.75rem;
      padding: 0 1rem;
    }
  `,
  large: css`
    height: 2.5rem;
    padding: 0 1.5rem;

    @media (max-width: 768px) {
      height: 2.25rem;
      padding: 0 1.25rem;
    }
  `,
};

const options = {
  normal: css`
    background-color: #3DB2F2;
    &:hover {
      background-color: #41BCFF;
    }
  `,
  danger: css`
    background-color: #d9534f;
    &:hover {
      background-color: #ff7043;
    }
  `,
};

const StyledButton = styled.button<{ size: 'small' | 'large'; option: 'normal' | 'danger' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  padding: 0 1rem;
  font-weight: 500;
  color: white;
  outline-offset: 2px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:disabled {
    cursor: default;
    background-color: #6c757d;
  }

  ${({ size }) => sizes[size]}
  ${({ option }) => options[option]}

  @media (max-width: 768px) {
    border-radius: 1.5rem;
  }

  @media (max-width: 480px) {
    border-radius: 1rem;
    padding: 0 0.75rem;
    font-size: 0.75rem;
  }
`;

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'small', option = 'normal', ...props }, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <StyledButton ref={ref} size={size} option={option} className={className} {...props} />
    );
  }
);

PrimaryButton.displayName = 'PrimaryButton';
