import React from 'react'
import Caption from './Caption'

export default {
	title: 'Components/Typography/Caption',
	component: Caption,
	argTypes: {
			variant: {
					name: 'size',
					control: {
							type: 'select',
							options: {
									u1: 'styles.u1',
									u2: 'styles.u2',
									u3: 'styles.u3',
							},
					},
			},
			fontWeight: {
				name: 'weight',
				control: {
						type: 'select',
						options: {
								semibold: 'semibold',
								regular: 'regular',
								light: 'light',
						},
				},
		},
		fontFamily: {
			control: {
					type: 'select',
					options: {
							body: 'body',
							heading: 'heading',
							mono: 'mono',
					}
			}
	}
	},
}

export const CaptionStory = (args) => <Caption {...args} />

CaptionStory.storyName = 'Caption'
