import styled from 'styled-components';

import { ImagesHeader } from './ImagesHeader';
import ImagesGrid from './ImagesGrid';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

const Images: React.FC = () => {
  return (
    <PageContainer>
      <ImagesHeader />
      <ImagesGrid />
    </PageContainer>
  );
};

export default Images;
