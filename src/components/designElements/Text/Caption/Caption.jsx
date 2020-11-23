/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'

const Caption = ({ variant = 'caption', ...props }) => (
	<Text
		{...props}
		sx={{
			variant: `${variant}`,
		}}
		children={props.children}
	/>
)

export default Caption
