import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Props } from '../src/Button';

const meta: Meta = {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Default text',
      control: { // not sure what this changes?
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

// export const Default = () => <Button variant='primary'>Click Me</Button>; //id we don't have/need a template
export const Default = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'I am secondary',
  onClick: action('secondary click'),
};
