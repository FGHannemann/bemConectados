import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
  title: 'Components/Heading',
    component: Heading,
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
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}
export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        size: 'lg',
        asChild: true,
        children: (
            <h1>Heading h1 - Heading as CustomComponente Customizado</h1>
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
