import React from 'react'
import * as ButtonStories from '../../ui/Button/Button.stories'
import TextButtonX2 from './TextButtonX2'

export default {
    title: 'Content Blocks/Text, button & button',
		component: 'TextButtonX2',
		argTypes: {
		buttonText: 'text',
		button2Text: 'text',
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
	button2Variant: {
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
},
}

const Template = (args) => <TextButtonX2 {...args} />

export const Standard = Template.bind ({})
Standard.args ={
...ButtonStories.Standard.args,
}
