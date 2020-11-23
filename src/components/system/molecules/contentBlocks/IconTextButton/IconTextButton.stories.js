/** @jsx jsx */
import { jsx, space } from 'theme-ui'
import React from 'react'
import IconTextButton from './IconTextButton'

export default {
	title: 'Base/Content Blocks/Icon,text & button',
}

export const standard = () => (
	<div>
		<IconTextButton
			buttonContent='button'
			buttonVariant='buttons.lg'
			iconColor='text'
			iconName='jimGlyph'
			iconSize='4em'
			iconTitle='jim glyph'
			textText='Deserunt nostrud ex commodo enim. Duis indeserunt magna magna id consequat ullamco non dolore. Consectetur reprehenderit nostrud incididunt consequat mollit excepteur in anim dolore ad.'
			textVariant='styles.text_lg'
		/>
	</div>
)
