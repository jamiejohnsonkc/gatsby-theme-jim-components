/** @jsx jsx */
import { jsx, Link } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const ExtLink = ({
	color,
	height,
	width,
	bg,
	padding,
	margin,
	linkTo,
	...props
}) => (
	<Link
		{...props}
		sx={{
			color,
			height,
			bg,
			width,
			padding,
			margin,
		}}
		href={linkTo}
		className={props.className}
		children={props.children}
	/>
)

ExtLink.propTypes = {
	bg: PropTypes.any,
	color: PropTypes.any,
	height: PropTypes.any,
	margin: PropTypes.any,
	padding: PropTypes.any,
	width: PropTypes.any,
	iconName: PropTypes.string,
}

ExtLink.defaultProps = {
	bg: 'transparent',
	color: 'primary',
	height: 'inherit',
	margin: 'inherit',
	padding: 'inherit',
	width: 'inherit',
	iconName: 'shapes',
}

export default ExtLink
