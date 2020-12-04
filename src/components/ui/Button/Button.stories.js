/** @jsx jsx */
import { jsx } from 'theme-ui'
import Button from './Button'

export default {
    title: 'Ui/Controls/Button',
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

export const Standard = (args) => <Button {...args} />
