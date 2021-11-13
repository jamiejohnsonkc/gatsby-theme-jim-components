/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import React from 'react'

import { FaShapes } from 'react-icons/fa'

const FpoImageWireFrame = (props) => (
	<Flex
		{...props}
		sx={{
			height: '100%',
			width: '100%',
			background: 'faint',
			justifyContent: 'center',
			alignItems: 'center',
		}}
	>
		<FaShapes />
	</Flex>
)

export default FpoImageWireFrame
