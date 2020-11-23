/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Text, Box, Link } from 'theme-ui'
import React from 'react'
import { ImArrowUpRight } from 'react-icons/im'

const CtaLinkExt = ({
	linkTo,
	linkText,
	linkVisual,
	className,
	color,
	...props
}) => (
	<>
		<Link
			href={linkTo}
			className={className}
			{...props}
			sx={{
				variant: 'links.ctaLink',
			}}
			// sx={{
			// 	display: 'inline-block',
			// }}
			// sx={{
			// width,
			// height,
			// bg,
			// padding,
			// margin,
			// color,
			// display: 'inline-flex',

			// }}
		>
			<Text
				{...props}
				className='linkText'
				sx={{
					color,
					display: 'inline-block',
				}}
			>
				{linkText}
			</Text>
			<Box
				{...props}
				className='linkVisual'
				sx={{
					display: 'inline-block',
				}}
			>
				{linkVisual}
			</Box>
		</Link>
	</>
)

CtaLinkExt.propTypes = {
	className: PropTypes.any,
	iconColor: PropTypes.any,
	iconMarginLeft: PropTypes.any,
	linkVisual: PropTypes.any,

	linkText: PropTypes.any,
	linkTo: PropTypes.any,
}

CtaLinkExt.defaultProps = {
	// height: '',
	// margin: '',
	// padding: '',
	// width: '',
	// bg: 'transparent',
	// color: 'text',
	// linkTo: '/',
	// linkText: 'Link',
	linkVisual: <ImArrowUpRight />,
	// iconSize: '.5em',
	// iconColor: 'primary',
	// iconMarginLeft: 1,
	className: 'ctaLink',
	linkText: 'Link',
	linkTo: '/',
}

export default CtaLinkExt
