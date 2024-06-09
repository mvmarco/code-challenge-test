import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ChangeEventHandler, KeyboardEventHandler, useState, FC } from 'react';
import styled from 'styled-components';

export interface SearchWidgetProps {
  className?: string;
  onSearchChange: (query: string) => void;
}

const SearchContainer = styled.div`
  position: relative;
  height: 2.5rem;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 2rem;
  border: none;
  background-color: white;
  padding: 0 1.5rem 0 2.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  height: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    outline: none;
  }
`;

const MagnifyingGlass = styled(MagnifyingGlassIcon)`
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  height: 1.3rem;
  width: 1.3rem; 
  color: #3DB2F2;
`;

export const SearchWidget: FC<SearchWidgetProps> = ({ className, onSearchChange }) => {
  const [searchValue, setSearchValue] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value.trim();
    if (event.key === 'Enter') {
      onSearchChange(value);
    }
  };

  return (
    <SearchContainer className={className}>
      <MagnifyingGlass />
      <SearchInput
        type="text"
        name="search"
        aria-label="Search"
        value={searchValue}
        title="Search"
        placeholder="Search image by title"
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
    </SearchContainer>
  );
};
