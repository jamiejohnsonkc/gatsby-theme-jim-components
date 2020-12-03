/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'
import FpoImageWireFrame from '../../utilities/fpo/FpoImageWireFrame'
import ArtTextLink from './ArtTextLink'

export default {
	title: 'Content Blocks/ArtTextLink',
}

export const standard = (props) => (
	<ArtTextLink
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
