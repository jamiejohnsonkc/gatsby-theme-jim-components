/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import ToggleSwitch from './ToggleSwitch'

export default {
	title: 'Design Elements/Inputs/ToggleSwitch',
}

export const standard = () => (
	<>
		<Box>
			<ToggleSwitch id='storyToggleSwitch' Text={['Yes', 'No']} />
		</Box>
		<Box>
			<ToggleSwitch
				Small='true'
				id='storyToggleSwitchSmall'
				Text={['Yes', 'No']}
			/>
		</Box>
	</>
)

