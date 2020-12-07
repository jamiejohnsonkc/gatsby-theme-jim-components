/** @jsx jsx */
import { jsx } from 'theme-ui'
import Button from './Button'

export default {
    title: 'Ui/Controls/Button',
    component: Button,
    argTypes: {
        buttonChild: { name: 'text', control: 'text' },
        fontSize: {
            control: {
                type: 'inline-radio',
                options: {
                    large: 1,
                    medium: 0,
                    small: '10px',
                },
            },
        },
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'gray', 'text', 'background'],
            },
        },
        bg: {
            name: 'background',
            control: {
                type: 'select',
                options: [
                    'primary',
                    'secondary',
                    'gray',
                    'text',
                    'background',
                    'transparent',
                ],
            },
        },

        borderColor: {
            name: 'borderColor',
            control: {
                type: 'select',
                options: {
                    primary: 'primary',
                    secondary: 'secondary',
                    gray: 'gray',
                    text: 'text',
                    background: 'background',
                },
            },
        },
        borderWidth: {
            name: 'borderWidth',
            control: {
                type: 'inline-radio',
                options: {
                    thin: '.1em',
                    normal: '.1618em',
                    thick: '.25em',
                },
            },
        },
        borderStyle: {
                disable: true,
        },

        // 	buttonVariant: {
        // 		control: {
        // 				type: 'select',
        // 				options: {
        // 					primarySm: 'buttons.primary.sm',
        // 					primaryMd: 'buttons.primary.md',
        // 					primaryLg: 'buttons.primary.lg',
        // 					secondarySm: 'buttons.secondary.sm',
        // 					secondaryMd: 'buttons.secondary.md',
        // 					secondaryLg: 'buttons.secondary.lg',
        // 					graySm: 'buttons.gray.sm',
        // 					grayMd: 'buttons.gray.md',
        // 					grayLg: 'buttons.gray.lg',
        // 					primaryOutlineSm: 'buttons.outline.primary.sm',
        // 					primaryOutlineMd: 'buttons.outline.primary.md',
        // 					primaryOutlineLg: 'buttons.outline.primary.lg',
        // 					secondaryOutlineSm: 'buttons.outline.secondary.sm',
        // 					secondaryOutlineMd: 'buttons.outline.secondary.md',
        // 					secondaryOutlineLg: 'buttons.outline.secondary.lg',
        // 					grayOutlineSm: 'buttons.outline.gray.sm',
        // 					grayOutlineMd: 'buttons.outline.gray.md',
        // 					grayOutlineLg: 'buttons.outline.gray.lg',
        // 					gradientHoverPrimary: 'buttons.gradientHover.primary',
        // 					gradientTest: 'buttons.gradientTest',
        // 				},
        // 		},
        // },

        buttonRadius: {
            control: {
                type: 'select',
                options: {
                    rounded: 'rounded',
                    pill: 'pill',
                    square: 'square',
                    circle: 'circle',
                },
            },
        },
        letterSpacing: {
            control: {
                type: 'select',
                options: {
                    spread: 'spread',
                    loose: 'loose',
                    lazy: 'lazy',
                    normal: 'normal',
                    pinch: 'pinch',
                    snug: 'snug',
                    tight: 'tight',
                },
            },
        },
        buttonType: {
            control: {
                type: 'select',
                options: {
                    button: 'button',
                    submit: 'submit',
                    reset: 'reset',
                },
            },
        },
    },
}

export const Standard = (args) => <Button {...args} />
