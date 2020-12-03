/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
// import layout from '../../../../../../../gatsby-theme-jim-theme-ui/src/gatsby-plugin-theme-ui/layout'

import PropTypes from 'prop-types'
// import theme from '../../../../../../../gatsby-theme-jim-theme-ui/src/gatsby-plugin-theme-ui/theme'

const Section = ({ sectionVariant, sectionBg, className, ...props }) => (
	<Box
		as='section'
		className={className}
		bg={sectionBg}
		{...props}
		sx={{
			variant: `${sectionVariant}`,
		}}
	/>
)

Section.propTypes = {
	sectionVariant: PropTypes.string,
}

Section.defaultProps = {
	sectionVariant: 'layout.section',
}

export default Section
