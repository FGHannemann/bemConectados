import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
    component: Text,
    args: {
        size: 'md',
        children: 'Bem Conectados!',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        },
        children: {
            control: {
                type: 'text'
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}
export const CustomComponent: StoryObj<TextProps> = {
    args: {
        size: 'lg',
        asChild: true,
        children: (
            <p>Testando CustomComponente Customizado</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            },
        },
    },
}
