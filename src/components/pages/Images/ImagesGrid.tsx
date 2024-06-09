import { FC } from 'react';
import styled from 'styled-components';

import { Image as ImageType } from '../../../models/image';

interface ImagesGridProps {
  images: ImageType[];
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Adjusted min width */
  gap: 1.5rem;
`;

const ImageCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;


const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ImageTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ImageDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
  flex-grow: 1;
`;

const ImageLink = styled.a`
  color: #3DB2F2;
  text-decoration: none;
  margin-top: auto;
  &:hover {
    text-decoration: underline;
  }
`;

const ImagesGrid: FC<ImagesGridProps> = ({ images }) => {
  return (
    <GridContainer>
      {images.map((image: ImageType) => (
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
