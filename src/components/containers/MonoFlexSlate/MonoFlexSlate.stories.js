/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'
import MonoFlexSlate from './MonoFlexSlate'
import Button from '../../../../product/designElements/buttons/Button/Button'

export default {
	title: 'Layout Elements/Slates/MonoFlexSlate',
}

const flexBlockStyle = { width: '44%' }

const flexBoxStyle = {
	backgroundColor: 'muted',
}

const FlexItemContent = (props) => (
	<Box
		sx={{
			py: 4,
			px: 4,
			bg: 'white',
		}}
	>
		<Text
			sx={{
				fontSize: 4,
				lineHeight: 1.25,
			}}
		>
			FlexItem Content Goes Here
		</Text>
		<Button
			sx={{
				mr: 2,
				mt: 4,
			}}
			variant='buttons.lg'
		>
			Discover
		</Button>
	</Box>
)

export const standard = (props) => (
	<MonoFlexSlate
		flexBlockStyle={flexBlockStyle}
		flexBoxStyle={flexBoxStyle}
		flexItemContent={<FlexItemContent />}
	/>
)
