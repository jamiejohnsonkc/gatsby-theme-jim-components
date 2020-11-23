/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import CtaLinkExt from './CtaLinkExt'
import { darken } from '@theme-ui/color'

export default {
	title: 'Navigation/Links/Text + Icon',
}

export const standard = (props) => (
	<>
		<CtaLinkExt
			{...props}
			className='className'
			iconColor='primary'
			iconMarginLeft={1}
			iconName='SolidNorthEastArrow'
			iconSize='.5em'
			linkText='Link'
			linkTo='/'
		/>
	</>
)
