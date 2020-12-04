/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const IconWrapper = ({ iconHeight, iconWidth, iconFill, ...props }) => (
	<Box
		{...props}
		sx={{
			'& > svg': {
				height: `${iconHeight}`,
				width: `${iconWidth}`,
				fill: `${iconFill}`,
			},
		}}
	>
		{props.children}
	</Box>
)

IconWrapper.propTypes = {
	children: PropTypes.any,
	iconFill: PropTypes.any,
	iconHeight: PropTypes.any,
	iconWidth: PropTypes.any,
}

IconWrapper.defaultProps = {
	// iconFill: 'yellow',
}

export default IconWrapper
