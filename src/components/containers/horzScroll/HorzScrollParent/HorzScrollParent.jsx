/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const HorzScrollParent = (props) => (
	<Flex
		{...props}
		sx={{
			flexWrap: 'nowrap',
			overflowX: 'auto',
			width: `${props.parentWidth}`,
			height: `${props.parentHeight}`,
			touchAction: 'pan-x',
			cursor: 'grab',
			webkitOverflowScrolling: 'touch',
			'&::webKitScrollbar': {
				display: 'none',
			},
			// '&::-webkit-scrollbar': {
			// 	display: 'none',
			// },
		}}
	>
		{props.children}
	</Flex>
)

HorzScrollParent.propTypes = {
	parentWidth: PropTypes.any,
	parentHeight: PropTypes.any,
}

HorzScrollParent.defaultProps = {
	parentWidth: '100%',
	parentHeight: '500px',
}

export default HorzScrollParent
