import { Meta, StoryFn } from '@storybook/react';

import { ImagesGrid, ImagesGridProps } from './ImagesGrid';
import { Image } from '../../../models/image';

export default {
  title: 'Organisms/ImagesGrid',
  component: ImagesGrid,
} as Meta;

const Template: StoryFn<ImagesGridProps> = (args) => <ImagesGrid {...args} />;

const exampleImages: Image[] = [
  {
    imagePath: 'https://via.placeholder.com/250',
    title: 'Sample Image 1',
    description: 'This is a description for sample image 1.',
  },
  {
    imagePath: 'https://via.placeholder.com/250',
    title: 'Sample Image 2',
    description: 'This is a description for sample image 2.',
  },
  {
    imagePath: 'https://via.placeholder.com/250',
    title: 'Sample Image 3',
    description: 'This is a description for sample image 3.',
  },
  {
    imagePath: 'https://via.placeholder.com/250',
    title: 'Sample Image 4',
    description: 'This is a description for sample image 4.',
  },
];

export const Default = Template.bind({});
Default.args = {
  images: exampleImages,
};
