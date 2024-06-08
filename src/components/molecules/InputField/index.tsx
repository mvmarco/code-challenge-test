import { nanoid } from 'nanoid';
import { forwardRef, useRef, ForwardedRef, ComponentPropsWithRef } from 'react';
import styled from 'styled-components';

import { Wrap } from '../../atoms/Wrap';
import { Label } from '../../atoms/Label';
import { InputError } from '../../atoms/InputError';

export interface InputFieldProps extends ComponentPropsWithRef<'input'> {
  inputClassName?: string;
  errorMessage?: string;
  label?: string;
}

const StyledInput = styled.input<{ hasError: boolean }>`
  border-radius: 0.5rem;
  height: 2.8rem;
  padding: 1rem;
  width: 100%;
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#ccc')};
  box-shadow: ${({ hasError }) =>
    hasError ? '0 0 0 1px red' : '0 0 5px rgba(0, 0, 0, 0.1)'};
  &:hover,
  &:focus {
    border-color: ${({ hasError }) => (hasError ? 'red' : '#3DB2F2')};
    box-shadow: ${({ hasError }) =>
      hasError ? '0 0 0 1px red' : '0 0 8px rgba(0, 0, 0, 0.2)'};
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, errorMessage, children, className, label, disabled, inputClassName = '', ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    const idRef = useRef<string>(id || nanoid());
    const inputProps = {
      ref,
      id: idRef.current,
      'aria-invalid': !!errorMessage,
      'aria-errormessage': errorMessage ? `${idRef.current}-error` : undefined,
      hasError: !!errorMessage,
    };

    return (
      <Wrap
        if={!!label}
        with={Label}
        wrapperProps={{
          text: label,
          className,
          disabled,
        }}
      >
        <InputWrapper>
          <StyledInput {...props} {...inputProps} disabled={disabled} className={inputClassName} />
          {children}
          <InputError errorMessage={errorMessage} id={inputProps['aria-errormessage']} />
        </InputWrapper>
      </Wrap>
    );
  }
);

InputField.displayName = 'InputField';
