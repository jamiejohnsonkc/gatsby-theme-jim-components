/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const FlexCover = ({
	as,
	justifyContent,
	alignItems,
	variant,
	bg,
	...props
}) => (
	<>
		<Flex
			{...props}
			as={as}
			bg={bg}
			sx={{
				alignItems,
				justifyContent,
				variant,
				position: 'relative',
				height: '100%',
				width: '100%',
			}}
		/>
	</>
)

FlexCover.propTypes = {
	alignItems: PropTypes.any,
	as: PropTypes.any,
	bg: PropTypes.any,
	justifyContent: PropTypes.any,
	children: PropTypes.any,
	variant: PropTypes.any,
}

FlexCover.defaultProps = {
	alignItems: 'center',
	as: 'div',
	justifyContent: 'center',
	children: 'flexCover children',
	variant: 'layout.section',
}

export default FlexCover
