import type { Meta, StoryObj } from '@storybook/vue3';

import Button from "../components/button/Button.vue"

const meta = {
    title: 'Base/Button',
    component: Button,
    tags: ['autodocs'],
    args: { size: 'medium', colorTheme: 'primary' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => ({
        components: { Button },
        template: `<Button :color-theme="'secondary'">Click</Button>`,
    }),
};