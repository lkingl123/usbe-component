import '../UsbeDialog';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/UsbeDialog',
  component: 'usbe-dialog',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    open: true,
    title: 'Dialog Title',
  },
};
