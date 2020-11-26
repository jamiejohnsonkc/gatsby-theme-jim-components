/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import ImageWCaption from './ImageWCaption'
import FpoImageWireFrame from '../../../../utilities/fpo/FpoImageWireFrame/FpoImageWireFrame'

export default {
	title: 'Content Blocks/Image with caption',
}

export const standard = (props) => (
	<ImageWCaption
		blockWidth='40em'
		captionPadding={2}
		captionText='Caption Tempor magna reprehenderit voluptate elit sit laborum est proident proident sit commodo exercitation'
		compImage={<FpoImageWireFrame />}
		imageHeight='16em'
		imageMb={2}
		imageWidth='100%'
	/>
)
