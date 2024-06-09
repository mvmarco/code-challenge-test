import { Meta, StoryFn } from '@storybook/react';

import { PrimaryButton } from './PrimaryButton';
import { ButtonProps } from './Button';

export default {
  title: 'Atoms/Buttons/PrimaryButton',
  component: PrimaryButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <PrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Primary Button',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger Button',
  option: 'danger',
};
