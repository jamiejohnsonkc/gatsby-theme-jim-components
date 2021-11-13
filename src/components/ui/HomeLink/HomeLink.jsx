/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import FpoLogo from '../../utilities/fpo/FpoLogo'
import FpoGlyph from '../../utilities/fpo/FpoGlyph'

const HeaderHomeLink = (props) => (
	<>
		<Link to='/'>
			<Box
				className='largeScreenBrand'
				{...props}
				sx={{
					display: ['none', 'inline-flex', 'inline-flex', 'inline-flex'],
				}}
			>
				{props.largeScreenBrand}
			</Box>

			<Box
				className='smallScreenBrand'
				{...props}
				sx={{
					display: ['inline-flex', 'none', 'none', 'none'],
				}}
			>
				{props.smallScreenBrand}
			</Box>
		</Link>
	</>
)

HeaderHomeLink.propTypes = {
	largeScreenBrand: PropTypes.any,
	smallScreenBrand: PropTypes.any,
}

HeaderHomeLink.defaultProps = {
	largeScreenBrand: <FpoLogo />,
	smallScreenBrand: <FpoGlyph />,
}

export default HeaderHomeLink
