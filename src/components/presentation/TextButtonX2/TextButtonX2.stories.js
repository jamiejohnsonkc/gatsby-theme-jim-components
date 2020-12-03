/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import TextButtonX2 from './TextButtonX2'

export default {
	title: 'Content Blocks/Text & Button X2',
}

export const standard = (props) => (
	<Box
		{...props}
		sx={{
			maxWidth: '42em',
		}}
	>
		<TextButtonX2
			button2Text='Button2'
			button2To='/'
			buttonText='Button'
			buttonTo='/'
			textText='Text lg lorem ea aliqua adipisicing ex sunt culpa in. Nisi ut veniam pariatur ullamco sint magna eu id sint voluptate ullamco laboris. Ex nostrud tempor pariatur commodo exercitation enim duis nulla. Commodo aliqua dolor qui reprehenderit quis reprehenderit veniam voluptate nulla culpa nisi.'
			textVariant='styles.text_lg'
		/>
	</Box>
)
