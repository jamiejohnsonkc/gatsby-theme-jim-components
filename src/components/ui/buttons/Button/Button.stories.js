/** @jsx jsx */
import { jsx } from 'theme-ui'
import Button from './Button'

export default {
    title: 'Design Elements/Buttons/Button',
    component: Button,
    argTypes: {
        buttonChild: { control: 'text' },
				buttonVariant: {
					control: {
							type: 'select',
							options: {
								primarySm: 'buttons.primarySm',
								primaryMd: 'buttons.primaryMd',
								primaryLg: 'buttons.primaryLg',
								secondarySm: 'buttons.secondarySm',
								secondaryMd: 'buttons.secondaryMd',
								secondaryLg: 'buttons.secondaryLg',
								graySm: 'buttons.graySm',
								grayMd: 'buttons.grayMd',
								grayLg: 'buttons.grayLg',
								primaryOutlineSm: 'buttons.primaryOutlineSm',
								primaryOutlineMd: 'buttons.primaryOutlineMd',
								primaryOutlineLg: 'buttons.primaryOutlineLg',
								secondaryOutlineSm: 'buttons.secondaryOutlineSm',
								secondaryOutlineMd: 'buttons.secondaryOutlineMd',
								secondaryOutlineLg: 'buttons.secondaryOutlineLg',
								grayOutlineSm: 'buttons.grayOutlineSm',
								grayOutlineMd: 'buttons.grayOutlineMd',
								grayOutlineLg: 'buttons.grayOutlineLg',
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

const Template = (args) => <Button {...args} />

export const Large = Template.bind({})
Large.args = {
    // buttonVariant: 'buttons.lg',
}

export const Medium = Template.bind({})
Medium.args = {
    // buttonVariant: 'buttons.md',
}
export const Small = Template.bind({})
Small.args = {
    // buttonVariant: 'buttons.sm',
}
