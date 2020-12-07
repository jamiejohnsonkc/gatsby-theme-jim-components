/** @jsx jsx */
import { jsx } from 'theme-ui'
import Button from './Button'
// import buttons from '../../../../../gatsby-theme-jim-theme-ui/src/gatsby-plugin-theme-ui/ex-theme-ui/gradients'

export default {
    title: 'Ui/Controls/Button',
    component: Button,
    argTypes: {
        buttonChild: { name: 'text', control: 'text' },
        	buttonVariant: {
        		control: {
        				type: 'select',
        				options: {
                            none: null,
                            primarySm: 'buttons.solid.primary.sm',
        					primaryMd: 'buttons.solid.primary.md',
        					primaryLg: 'buttons.solid.primary.lg',
        					secondarySm: 'buttons.solid.secondary.sm',
        					secondaryMd: 'buttons.solid.secondary.md',
        					secondaryLg: 'buttons.solid.secondary.lg',
        					graySm: 'buttons.solid.gray.sm',
        					grayMd: 'buttons.solid.gray.md',
        					grayLg: 'buttons.solid.gray.lg',
        					primaryOutlineSm: 'buttons.outline.primary.sm',
        					primaryOutlineMd: 'buttons.outline.primary.md',
        					primaryOutlineLg: 'buttons.outline.primary.lg',
        					secondaryOutlineSm: 'buttons.outline.secondary.sm',
        					secondaryOutlineMd: 'buttons.outline.secondary.md',
        					secondaryOutlineLg: 'buttons.outline.secondary.lg',
        					grayOutlineSm: 'buttons.outline.gray.sm',
        					grayOutlineMd: 'buttons.outline.gray.md',
        					grayOutlineLg: 'buttons.outline.gray.lg',
                            primaryltrHoverGradSm: 'buttons.ltrHoverGrad.primary.sm',
                            primaryltrHoverGradMd: 'buttons.ltrHoverGrad.primary.sm',
                            primaryltrHoverGradLg: 'buttons.ltrHoverGrad.primary.sm',
                            secondaryltrHoverGradSm: 'buttons.ltrHoverGrad.secondary.sm',
                            secondaryltrHoverGradMd: 'buttons.ltrHoverGrad.secondary.md',
                            secondaryltrHoverGradLg: 'buttons.ltrHoverGrad.secondary.lg',
                            grayltrHoverGradSm: 'buttons.ltrHoverGrad.gray.sm',
                            grayltrHoverGradMd: 'buttons.ltrHoverGrad.gray.md',
                            grayltrHoverGradLg: 'buttons.ltrHoverGrad.gray.lg',
        				},
        		},
        },
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
        fontWeight: {
            control: {
                type: 'inline-radio',
                options: ['light', 'normal', 'bold', 'heavy'],
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
