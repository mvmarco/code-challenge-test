import React, { ForwardedRef, forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { ButtonProps } from './Button';

const buttonSizes = {
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

const buttonOptions = {
  normal: css`
    color: #3DB2F2; 
    border: none;
  `,
  danger: css`
    color: #d9534f; 
    border: none;
  `,
};

const StyledButton = styled.button<{
  size: 'small' | 'large';
  option: 'normal' | 'danger';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  padding: 0 1rem; 
  font-weight: 500; 
  background-color: white; 
  border-width: 1.5px; 
  border-style: solid; 
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:disabled {
    cursor: default;
    background-color: #6c757d; 
    border-color: #6c757d; 
    color: white;
  }
  ${({ size }) => buttonSizes[size]}
  ${({ option }) => buttonOptions[option]}

  @media (max-width: 768px) {
    border-radius: 1rem;
  }

  @media (max-width: 480px) {
    border-radius: 0.75rem;
    padding: 0 0.75rem;
    font-size: 0.75rem;
  }
`;

export const SecondaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'small', option = 'normal', ...props }, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <StyledButton ref={ref} size={size} option={option} className={className} {...props} />
    );
  }
);

SecondaryButton.displayName = 'SecondaryButton';
