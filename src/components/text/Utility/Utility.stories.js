/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Utility from './Utility'

export default {
	title: 'Components/Typography/Utility',
	component: Utility,
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
								bold: 'bold',
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

export const UtilityStory = (args) => <Utility {...args} />

UtilityStory.storyName = 'Utility'

