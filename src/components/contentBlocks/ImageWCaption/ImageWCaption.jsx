/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Box } from 'theme-ui'
import React from 'react'

import Caption from '../../../atoms/Text/Caption'
import FpoImageWireFrame from '../../../../utilities/fpo/FpoImageWireFrame/FpoImageWireFrame'

const ImageWCaption = (props) => (
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

		<Caption
			sx={{
				padding: `${props.captionPadding}`,
				variant: 'text.caption',
			}}
			children={props.captionText}
		/>
	</Box>
)

export default ImageWCaption

ImageWCaption.propTypes = {
	blockWidth: PropTypes.any,
	captionPadding: PropTypes.any,
	captionText: PropTypes.string,
	compImage: PropTypes.any,
	imageHeight: PropTypes.string,
	imageMb: PropTypes.string,
	imageWidth: PropTypes.string,
}

ImageWCaption.defaultProps = {
	blockWidth: '40em',
	captionPadding: 2,
	captionText:
		'Caption Tempor magna reprehenderit voluptate elit sit laborum est proident proident sit commodo exercitation',
	compImage: <FpoImageWireFrame />,
	imageHeight: '10em',
	imageMb: 2,
	imageWidth: '100%',
}
