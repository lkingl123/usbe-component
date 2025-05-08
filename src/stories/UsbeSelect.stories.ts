import '../UsbeSelect';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/UsbeSelect',
  component: 'usbe-select',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    options: { control: 'object' },
    selected: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    selected: 'Option 1',
  },
};
