import type { Meta, StoryObj } from '@storybook/vue3';

import Input from "@/components/input/Input.vue"

const meta = {
    title: 'Base/Input',
    component: Input,
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
        colorTheme: {
            options: [
                'none',
                'default',
                'primary',
                'secondary',
                'tertiary',
                'success',
                'danger',
                'warning'
            ],
            control: { type: 'radio' },
        },
    },
} satisfies Meta<typeof Input>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => {
        return {
          components: { Input },
          setup() {
              return { args }
          },
          template: `
           <Input 
            v-model="args.modelValue" 
            :size="args.size"
            :radius="args.radius"
            :color-theme="args.colorTheme"
            :required="args.required"
            :title="args.title"
            :validation="args.validation"
            :validation-message="args.validationMessage"
            placeholder="Enter your text"
          />`
        }
    },
    args: {
        modelValue: '',
        title: '',
        validationMessage: '',
        size: 'medium',
        radius: 'small',
        colorTheme: undefined,
        required: false,
        validation: true
    }
}