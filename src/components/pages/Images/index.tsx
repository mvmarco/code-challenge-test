import { useState, useMemo, FC } from 'react';
import styled from 'styled-components';

import { useFetchImagesQuery } from '../../../redux/api/imagesSlice';
import { Image as ImageType } from '../../../models/image';
import { ImagesHeader } from './ImagesHeader';
import ImagesGrid from './ImagesGrid';
import Pagination from '../../organisms/pagination';
import { NoResults } from '../../molecules/noResults';
import { LoadingResults } from '../../molecules/loadingResults';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 1.5rem;
  height: 100vh;
  background-color: #f9f9f9;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding-bottom: 1.5rem;
`;

const Images: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 10;

  const { data, error, isLoading } = useFetchImagesQuery({});

  const filteredImages = useMemo(() => {
    if (!data?.data) return [];
    return data.data.filter((image: ImageType) =>
      image.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [data, searchQuery]);

  const paginatedImages = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredImages.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredImages, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to the first page on a new search
  };

  const imagesPresent = filteredImages.length > 0;

  return (
    <PageContainer>
      <ImagesHeader onSearchChange={handleSearchChange} />
      <ContentContainer>
        {isLoading || error ? (
          <LoadingResults isLoading={isLoading} error={!!error} />
        ) : imagesPresent ? (
          <ImagesGrid images={paginatedImages} />
        ) : (
          <NoResults />
        )}
      </ContentContainer>
      {imagesPresent && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
    </PageContainer>
  );
};

export default Images;
