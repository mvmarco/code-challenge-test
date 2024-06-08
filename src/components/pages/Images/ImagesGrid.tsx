import styled from 'styled-components';

import { useFetchImagesQuery } from '../../../redux/api/imagesSlice';
import { Image as ImageType} from '../../../models/image';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const ImageCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ImageTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ImageDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const ImageLink = styled.a`
  color: #3DB2F2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ImagesGrid = () => {
  const { data, error, isLoading } = useFetchImagesQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading images</div>;

  return (
    <GridContainer>
      {data?.data?.map((image: ImageType) => (
        <ImageCard key={image.imagePath}>
          <Image src={image.imagePath} alt={image.title} />
          <ImageTitle>{image.title}</ImageTitle>
          <ImageDescription>{image.description}</ImageDescription>
          <ImageLink href={image.imagePath} target="_blank" rel="noopener noreferrer">
            URL
          </ImageLink>
        </ImageCard>
      ))}
    </GridContainer>
  );
};

export default ImagesGrid;
