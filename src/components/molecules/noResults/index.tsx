import { FC } from 'react';
import styled from 'styled-components';

const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: #666;
`;

const NoResultsMessage = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const NoResults: FC = () => {
  return (
    <NoResultsContainer>
      <NoResultsMessage>No search results found</NoResultsMessage>
      <p>Try searching with a different keyword.</p>
    </NoResultsContainer>
  );
};