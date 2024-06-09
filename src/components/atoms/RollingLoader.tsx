import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.span`
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 40px;
  height: 40px;
  animation: ${spin} 2s linear infinite;
`;

interface RollingLoaderProps {
  ariaLabel: string;
  className?: string;
}

export const RollingLoader: FC<RollingLoaderProps> = ({
  className = '',
  ariaLabel
}) => {
  return (
    <Loader
      role="progressbar"
      aria-label={ariaLabel}
      className={className}
    />
  );
};
