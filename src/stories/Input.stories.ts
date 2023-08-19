import type { Meta, StoryObj } from '@storybook/vue3';

import Input from "@/components/input/Input.vue"

const meta = {
    title: 'Base/Input',
    component: Input,
    tags: ['autodocs']
} satisfies Meta<typeof Input>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => ({
        components: { Input },
        template: `
          <Input 
              :size="'small'" 
              placeholder="Enter your name"
          />
        `,
    }),
}

export const Disabled: Story = {
    render: () => ({
        components: { Input },
        template: `
          <Input 
              :size="'small'"
              placeholder="Enter your name" 
              disabled
          />
        `,
    }),
}