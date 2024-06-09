import { PlusIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import { useBoolean } from 'usehooks-ts';
import styled from 'styled-components';

import { PrimaryButton } from '../../atoms/buttons/PrimaryButton';
import { NewImageDialog } from './NewImageDialog';
import { SearchWidget } from '../../organisms/searchWidget';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
  background-color: #f9f9f9;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;
const StyledPlusIcon = styled(PlusIcon)`
  height: 1.5rem;
  color: white;
`;

interface Props {
  onSearchChange: (query: string) => void;
}

export const ImagesHeader: FC<Props> = ({onSearchChange}) => {

  const { value: isNewImageDialogOpen, setTrue: openNewImageDialog, setFalse: closeNewImageDialog } = useBoolean(false);

  return (
    <HeaderContainer>
      <Title>Images Management</Title>
      <ActionContainer>
        <SearchWidget className="mb-4" onSearchChange={onSearchChange} />
        <PrimaryButton type="submit" onClick={openNewImageDialog}>
          <StyledPlusIcon/>
          Add New Image
        </PrimaryButton>
      </ActionContainer>
      <NewImageDialog open={isNewImageDialogOpen} onClose={closeNewImageDialog} />
    </HeaderContainer>
  );
};
