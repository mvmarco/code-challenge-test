import { FC } from 'react';
import styled from 'styled-components';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border-top: 1px solid #ddd;
  padding-top: 1rem;
`;

const PageButton = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? '#3DB2F2' : 'white')};
  color: ${({ active }) => (active ? 'white' : '#333')};
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #3592c4;
    color: white;
  }
`;

const IconContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  &:hover {
    color: #3592c4;
  }
  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;


const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <PaginationContainer>
      <IconContainer onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}>
        <ChevronLeftIcon className="w-4 h-4 text-gray-500" />
      </IconContainer>
      {pageNumbers.slice(Math.max(0, currentPage - 3), currentPage + 2).map((page) => (
        <PageButton
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}
      <IconContainer onClick={() => onPageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}>
        <ChevronRightIcon className="w-4 h-4 text-gray-500" />
      </IconContainer>
    </PaginationContainer>
  );
};

export default Pagination;
