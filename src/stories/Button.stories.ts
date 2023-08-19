import type { Meta, StoryObj } from '@storybook/vue3'

import Button from '@/components/button/Button.vue'

const meta = {
  title: 'Base/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
      size: {
        options: [
          'small',
          'medium',
          'large'
        ],
          control: { type: 'radio' },
        },
        radius: {
          options: [
            'none',
            'small',
            'medium',
            'full'
          ],
          control: { type: 'radio' },
        },
        disabled: {
          options: [true, false],
          control: { type: 'radio' },
        },
        colorTheme: {
          options: [
            'default',
            'primary',
            'secondary',
            'tertiary',
            'success',
            'danger',
            'warning'
          ],
          control: { type: 'radio' },
        }
    },
} satisfies Meta<typeof Button>


type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
     return {
        components: { Button },
        setup() {
          return { args }
        },
        template: `
          <Button 
            :size="args.size"
            :radius="args.radius"
            :color-theme="args.colorTheme"
            :disabled="args.disabled"
          >
            Example
          </Button>
        `
     }
  },
  args: {
    size: 'medium',
    radius: 'small',
    colorTheme: 'default',
    disabled: false
  }
}

export default meta;