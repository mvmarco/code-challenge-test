import { Meta, StoryFn } from '@storybook/react';

import { NoResults } from '.';

export default {
  title: 'Molecules/NoResults',
  component: NoResults,
} as Meta;

const Template: StoryFn = () => <NoResults />;

export const Default = Template.bind({});
