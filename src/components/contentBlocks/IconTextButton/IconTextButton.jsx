/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
// import Icon from '../../../atoms/icons/Icon'
import Glyph from '../../../../../../src/svg/assets/fpo/glyph-1.svg'
import Button from '../../../../product/designElements/buttons/Button'

const IconTextButton = ({ icon, textText, buttonContent, ...props }) => (
	<Box>
		<Box>{icon}</Box>
		<Text>{textText}</Text>
		<Button>{buttonContent}</Button>
	</Box>
)

IconTextButton.propTypes = {
	buttonContent: PropTypes.string,
	icon: PropTypes.any,
	textText: PropTypes.string,
}

IconTextButton.defaultProps = {
	icon: '<Glyph/>',
	buttonContent: 'button',
	textText:
		'Deserunt nostrud ex commodo enim. Duis in deserunt magna magna id consequat ullamco non dolore. Consectetur reprehenderit nostrud incididunt consequat mollit excepteur in anim dolore ad.',
}

export default IconTextButton
