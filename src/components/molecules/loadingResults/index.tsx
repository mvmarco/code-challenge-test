import { FC } from 'react';
import styled from 'styled-components';

import { RollingLoader } from '../../atoms/RollingLoader';

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: #666;
`;

const LoadingMessage = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  font-size: 1rem;
  color: #666;
`;

export interface LoadingProps {
  isLoading: boolean;
  error: boolean;
}

export const LoadingResults: FC<LoadingProps> = ({ isLoading, error }) => {
  return (
    <LoadingContainer>
    {isLoading ? (
      <>
        <RollingLoader ariaLabel="Loading" />
        <LoadingMessage>Loading your data...</LoadingMessage>
      </>
    ) : error ? (
      <>
        <LoadingMessage>Error loading images</LoadingMessage>
        <ErrorMessage>Try again later.</ErrorMessage>
      </>
    ) : null}
  </LoadingContainer>
  );
};
