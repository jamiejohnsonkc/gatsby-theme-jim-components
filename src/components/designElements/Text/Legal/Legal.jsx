/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'

const Legal = ({ variant = 'Llgal', ...props }) => (
	<Text
		{...props}
		sx={{
			variant: `${variant}`,
		}}
		children={props.children}
	/>
)

export default Legal
