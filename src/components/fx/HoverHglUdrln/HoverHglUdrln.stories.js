/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

export default {
	title: 'Style/Hover Styles/Hover highlight & underline',
}

export const HoverHglUdrln = (props) => (
	<span
		{...props}
		sx={{
			backfaceVisibility: 'hidden',
			background: 'none',
			border: '0px',
			// color: 'text',
			color: `${props.textColor}`,
			cursor: 'pointer',
			display: 'inline-flex',
			margin: '0px',
			// outlineColor: 'primary',
			outlineColor: `${props.outlineColor}`,
			overflow: 'hidden',
			position: 'relative',
			padding: '0px 4px',
			textDecoration: 'none',
			transition: 'color 200ms ease-in-out 100ms, transform 100ms ease-out 0s',
			willChange: 'color, transform',
			zIndex: '1',

			'&::before, &::after': {
				content: '""',
				display: 'block',
				height: '100%',
				left: '0px',
				position: 'absolute',
				top: '0px',
				transform: 'translateX(-110%)',
				transformOrigin: 'left center',
				transition: 'transform 100ms ease-in 0s',
				width: '100%',
				willChange: 'transform',
				zIndex: '-1',
			},
			'&::before': {
				backgroundColor: 'white',
				mixBlendMode: 'difference',
				pointerEvents: 'none',
				zIndex: '1',
			},
			'&::after': {
				// backgroundColor: 'rgb(252,86,11)',
				backgroundColor: `${props.differenceColor}`,
			},

			'&:hover::before, &:hover::after': {
				transform: 'translateX(0px)',
				transition: 'transform 200ms ease-in-out 100ms',
			},
			'&:hover>span': {
				transform: 'scaleX(0) translateY(-1px)',
			},
		}}
	>
		{props.hoverText}
		<span
			{...props}
			sx={{
				// height: '2px',
				height: `${props.underlineHeight}`,
				// backgroundColor: 'primary',
				backgroundColor: `${props.underlineColor}`,
				bottom: '0px',
				display: 'block',
				left: '0px',
				position: 'absolute',
				transformOrigin: 'left center',
				transition: 'transform 200ms ease-out 0s',
				width: '100%',
				willChange: 'transform',
				zIndex: '1',
			}}
		/>
	</span>
)

HoverHglUdrln.propTypes = {
	differenceColor: PropTypes.any,
	hoverText: PropTypes.string,
	outlineColor: PropTypes.any,
	textColor: PropTypes.any,
	underlineColor: PropTypes.any,
	underlineHeight: PropTypes.any,
}

HoverHglUdrln.defaultProps = {
	differenceColor: 'rgb(252,86,11)',
	hoverText: 'reversed highlight link',
	outlineColor: 'primary',
	textColor: 'text',
	underlineColor: 'primary',
	underlineHeight: '2px',
}

// export default HoverHglUdrln
