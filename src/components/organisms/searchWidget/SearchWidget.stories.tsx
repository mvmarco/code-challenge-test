import { Meta, StoryFn } from '@storybook/react';

import { SearchWidget, SearchWidgetProps } from '.';


export default {
  title: 'Organisms/SearchWidget',
  component: SearchWidget,
  argTypes: {
    onSearchChange: { action: 'search changed' },
  },
} as Meta;

const Template: StoryFn<SearchWidgetProps> = (args) => <SearchWidget {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: '',
  onSearchChange: (query: string) => console.log(`Search query: ${query}`),
};
