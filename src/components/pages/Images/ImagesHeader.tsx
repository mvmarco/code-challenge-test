import { PlusIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import { useBoolean } from 'usehooks-ts';
import styled from 'styled-components';

import { PrimaryButton } from '../../atoms/buttons/PrimaryButton';
import { NewImageDialog } from './NewImageDialog';
import { SearchWidget } from '../../organisms/searchWidget';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
  background-color: #f9f9f9;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 600px;

  @media (min-width: 769px) {
    justify-content: flex-end;
    width: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 769px) {
    margin-bottom: 0;
    text-align: left;
  }
`;

const StyledPlusIcon = styled(PlusIcon)`
  height: 1.5rem;
  color: white;
`;

interface Props {
  onSearchChange: (query: string) => void;
}

export const ImagesHeader: FC<Props> = ({ onSearchChange }) => {
  const { value: isNewImageDialogOpen, setTrue: openNewImageDialog, setFalse: closeNewImageDialog } = useBoolean(false);

  return (
    <HeaderContainer>
      <Title>Images Management</Title>
      <ActionContainer>
        <SearchWidget className="mb-4" onSearchChange={onSearchChange} />
        <PrimaryButton type="submit" onClick={openNewImageDialog} aria-label="Save changes">
          <StyledPlusIcon />
          Add Image
        </PrimaryButton>
      </ActionContainer>
      <NewImageDialog open={isNewImageDialogOpen} onClose={closeNewImageDialog} />
    </HeaderContainer>
  );
};
