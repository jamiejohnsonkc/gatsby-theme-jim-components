/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const FlexBlock = (props) => (
	<Flex
		{...props}
		className='flexBlock'
		style={props.flexBlockStyle}
		sx={{
			bg: 'transparent',
			flexDirection: ['column', 'column', 'row'],
			height: '100%',
			width: '100%',
		}}
	>
		<Box
			{...props}
			className='flexBox'
			style={props.flexBoxStyle}
			sx={{
				flex: ['0 1 auto', null, '1 1 50%'],
				p: 2,
				bg: 'transparent',
				color: 'text',
			}}
		>
			{props.children}
		</Box>
	</Flex>
)

FlexBlock.propTypes = {}

FlexBlock.defaultProps = {}

export default FlexBlock
