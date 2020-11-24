/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import React from 'react'

const Subline = ({ as, ...props }) => (
	<Heading
		{...props}
		as={as}
		sx={{
			variant: 'subline',
		}}
		children={props.children}
	/>
)

export default Subline