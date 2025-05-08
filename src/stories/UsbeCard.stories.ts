import '../UsbeCard';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/UsbeCard',
  component: 'usbe-card',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    title: 'Card Title',
    content: 'This is the content of the card.',
  },
};
