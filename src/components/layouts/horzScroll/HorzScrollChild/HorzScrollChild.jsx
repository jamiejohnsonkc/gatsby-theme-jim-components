/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const HorzScrollChild = (props) => (
	<Box
		{...props}
		sx={{
			flex: '0 0 auto',
			width: `${props.childWidth}`,
			height: `${props.childHeight}`,
			// display: 'inline-block',
		}}
	>
		{props.children}
	</Box>
)

HorzScrollChild.propTypes = {
	childHeight: PropTypes.any,
	childWidth: PropTypes.any,
}

HorzScrollChild.defaultProps = {
	childHeight: '51vh',
	childWidth: '32em',
}

export default HorzScrollChild
