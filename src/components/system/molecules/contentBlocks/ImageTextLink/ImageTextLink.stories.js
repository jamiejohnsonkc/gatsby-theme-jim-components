/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'
import FpoImageWireFrame from '../../../../utilities/fpo/FpoImageWireFrame'
import ImageTextLink from './ImageTextLink'

export default {
	title: 'Content Blocks/ImageTextLink',
}

export const standard = (props) => (
	<ImageTextLink
		textVariant='styles.d4'
		blockWidth='16.23em'
		extLinkText='See More on LinkedIn'
		extLinkTo='/'
		buttonVariant='buttons.lg'
		compImage={<FpoImageWireFrame />}
		imageHeight='10em'
		imageMb={4}
		imageWidth='100%'
		textMb={4}
		textText='"Text lg lorem ea aliqua adipisicing ex sunt culpa in."'
		{...props}
		sx={{
			'& > blockText': {
				textAlign: 'center',
			},
		}}
	/>
)
