import { Meta, StoryFn } from '@storybook/react';

import { SecondaryButton } from './SecondaryButton';
import { ButtonProps } from './Button';

export default {
  title: 'Atoms/Buttons/SecondaryButton',
  component: SecondaryButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <SecondaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Secondary Button',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger Button',
  option: 'danger',
};
