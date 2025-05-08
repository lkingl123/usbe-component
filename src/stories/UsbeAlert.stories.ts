import '../UsbeAlert';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/UsbeAlert',
  component: 'usbe-alert',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    message: { control: 'text' },
    type: { control: 'select', options: ['info', 'success', 'error'] },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    message: 'Hello from Alert!',
    type: 'info',
  },
};
