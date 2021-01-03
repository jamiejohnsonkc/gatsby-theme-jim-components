import Caption from './Caption'

export default {
	title: 'Components/Typography',
	component: Caption,
	argTypes: {
			variant: {
					name: 'size',
					control: {
							type: 'select',
							options: {
									large: 'styles.u1',
									medium: 'styles.u2',
									small: 'styles.p3',
							},
					},
			},
	},
}

export const CaptionStory = (args) => <Caption {...args} />

CaptionStory.storyName = 'Caption'
