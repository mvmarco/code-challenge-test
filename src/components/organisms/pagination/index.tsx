import { FC } from 'react';
import styled from 'styled-components';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export interface PaginationProps {
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

export const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageNumbers = () => {
    const delta = 2;
    const range = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      range.unshift('...');
    }
    if (currentPage + delta < totalPages - 1) {
      range.push('...');
    }

    range.unshift(1);
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <PaginationContainer>
      <IconContainer onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}>
        <ChevronLeftIcon className="w-4 h-4 text-gray-500" />
      </IconContainer>
      {pageNumbers.map((page, index) => (
        typeof page === 'number' ? (
          <PageButton
            key={index}
            active={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PageButton>
        ) : (
          <span key={index} style={{ padding: '0.5rem 1rem' }}>{page}</span>
        )
      ))}
      <IconContainer onClick={() => onPageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}>
        <ChevronRightIcon className="w-4 h-4 text-gray-500" />
      </IconContainer>
    </PaginationContainer>
  );
};