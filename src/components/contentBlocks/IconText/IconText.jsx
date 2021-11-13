/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'


const IconText = ({ icon, textText ...props }) => (
	<Box>
		{icon}

		<Text
			{...props}
			sx={{
				variant: `${props.textVariant}`,
				marginBottom: 4,
			}}
		>
			{textText}
		</Text>
	</Box>
)

IconText.propTypes = {
	iconColor: PropTypes.any,
	iconName: PropTypes.string,
	iconSize: PropTypes.any,
	iconTitle: PropTypes.string,
	textText: PropTypes.string,
	textVariant: PropTypes.string,
}

IconText.defaultProps = {
	iconColor: 'text',
	icon: '<Glyph/>',
	textText:
		'Deserunt nostrud ex commodo enim. Duis in deserunt magna magna id consequat ullamco non dolore. Consectetur reprehenderit nostrud incididunt consequat mollit excepteur in anim dolore ad.',
	textVariant: 'text.p1',
}

export default IconText
