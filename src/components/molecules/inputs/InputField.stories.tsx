import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { InputField, InputFieldProps } from '.';

export default {
  title: 'Molecules/InputField',
  component: InputField,
  argTypes: {
    label: { control: 'text' },
    errorMessage: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<InputFieldProps> = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  errorMessage: '',
  disabled: false,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Label',
  errorMessage: 'This field is required',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  errorMessage: '',
  disabled: true,
};
