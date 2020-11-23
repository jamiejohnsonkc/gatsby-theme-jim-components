/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import ExtLink from '../../../atoms/ExtLink'
import FpoImageWireFrame from '../../../../utilities/fpo/FpoImageWireFrame/FpoImageWireFrame'
// import FpoStaticAstronaut from '../../../../utilities/fpo/FpoImages/FpoStaticAstronaut/FpoStaticAstronaut'

//TODO fix props to enable nested styles

const ImageTextLink = ({ textAlign, ...props }) => (
	<Box
		{...props}
		sx={{
			width: `${props.blockWidth}`,
		}}
		className='className'
	>
		<Box
			className='imageContainer'
			{...props}
			sx={{
				height: `${props.imageHeight}`,
				width: `${props.imageWidth}`,
				marginBottom: `${props.imageMb}`,
			}}
			children={props.compImage}
		/>
		<Text
			{...props}
			className='blockText'
			sx={{
				textAlign,
				variant: `${props.textVariant}`,
				marginBottom: `${props.textMb}`,
			}}
			children={props.textText}
		/>
		<ExtLink {...props} href={props.extLinkTo} children={props.extLinkText} />
	</Box>
)

ImageTextLink.propTypes = {
	blockWidth: PropTypes.string,
	extLinkText: PropTypes.string,
	extLinkTo: PropTypes.string,
	buttonVariant: PropTypes.string,
	compImage: PropTypes.any,
	imageHeight: PropTypes.string,
	imageMb: PropTypes.string,
	imageWidth: PropTypes.string,
	textMb: PropTypes.number,
	textText: PropTypes.string,
	textVariant: PropTypes.string,
}

ImageTextLink.defaultProps = {
	blockWidth: '40em',
	extLinkText: 'See More on LinkedIn',
	extLinkTo: '/',
	buttonVariant: 'buttons.lg',
	compImage: <FpoImageWireFrame />,
	imageHeight: '10em',
	imageMb: 4,
	imageWidth: '100%',
	textMb: 4,
	textText:
		'Text lg lorem ea aliqua adipisicing ex sunt culpa in. Nisi ut veniam pariatur ullamco sint magna eu id sint voluptate ullamco laboris.',
	textVariant: 'text.text_lg',
}

export default ImageTextLink
