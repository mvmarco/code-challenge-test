import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Pagination, PaginationProps } from '.';

export default {
  title: 'Organisms/Pagination',
  component: Pagination,
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    onPageChange: { action: 'pageChanged' },
  },
} as Meta;

const InteractiveTemplate: StoryFn<PaginationProps> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    args.onPageChange(page);
  };

  return <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} />;
};

export const Default = InteractiveTemplate.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 10,
  onPageChange: (page: number) => {
    console.log(`Page changed to: ${page}`);
  },
};

export const FewPages = InteractiveTemplate.bind({});
FewPages.args = {
  currentPage: 1,
  totalPages: 3,
  onPageChange: (page: number) => {
    console.log(`Page changed to: ${page}`);
  },
};

export const ManyPages = InteractiveTemplate.bind({});
ManyPages.args = {
  currentPage: 5,
  totalPages: 20,
  onPageChange: (page: number) => {
    console.log(`Page changed to: ${page}`);
  },
};
