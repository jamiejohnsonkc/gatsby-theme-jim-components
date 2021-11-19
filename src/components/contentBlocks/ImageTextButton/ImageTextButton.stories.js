/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import ImageTextButton from './ImageTextButton'
import FpoImageWireFrame from '../../../../utilities/fpo/FpoImageWireFrame/FpoImageWireFrame'

export default {
	title: 'Base/Content Blocks/Image, Text, Button',
}

export const standard = (props) => (
	<ImageTextButton
		blockWidth='40em'
		buttonText='Button'
		buttonTo='/'
		buttonVariant='buttons.lg'
		compImage={<FpoImageWireFrame />}
		imageHeight='10em'
		imageMb={4}
		imageWidth='100%'
		textMb={4}
		textText='Text lg lorem ea aliqua adipisicing ex sunt culpa in. Nisi ut veniam pariatur ullamco sint magna eu id sint voluptate ullamco laboris.'
		textVariant='styles.p1'
	/>
)
