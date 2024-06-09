import { Meta, StoryFn } from '@storybook/react';

import { LoadingProps, LoadingResults } from '.';

export default {
  title: 'Molecules/LoadingResults',
  component: LoadingResults,
  argTypes: {
    isLoading: { control: 'boolean' },
    error: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<LoadingProps> = (args) => <LoadingResults {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  error: false,
};

export const Error = Template.bind({});
Error.args = {
  isLoading: false,
  error: true,
};

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  error: false,
};
