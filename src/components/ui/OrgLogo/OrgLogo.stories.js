import React from 'react'
import OrgLogo from './OrgLogo'
import colors from '../../../../../../gatsby-theme-jim-theme-ui/src/gatsby-plugin-theme-ui/colors'

export default {
	title: 'OrgLogo',
}

export const standard = (props) => <OrgLogo fill={colors.primary} width='6em' />
