import '../Gary'; 

import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/MyBaseElement',
  component: 'gary-element',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
