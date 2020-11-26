/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import OrgGlyph from './OrgGlyph'
import colors from '../../../../../gatsby-theme-jim-theme-ui/src/gatsby-plugin-theme-ui/colors'

export default {
	title: 'Style/Identity/OrgGlyph',
}

export const standard = (props) => (
	<OrgGlyph fill={colors.primary} width='4em' />
)
