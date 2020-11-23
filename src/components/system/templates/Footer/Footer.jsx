/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import React from 'react'
import { NavLink } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Copyright from '../../../molecules/contentBlocks/Copyright'
{
	/*
import StaticNavbarLinks from "../Nav/StaticNavbarLinks"
*/
}

const Footer = (Props) => (
	<Flex
		sx={{
			flexWrap: 'wrap',
			alignItems: 'center',
			mx: 'auto',
			px: 2,
			py: 4,
		}}
	>
		<Box
			sx={{
				p: 2,
			}}
		>
			Test content
		</Box>
	</Flex>
)
Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
