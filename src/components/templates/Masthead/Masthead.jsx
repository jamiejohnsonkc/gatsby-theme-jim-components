/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const Masthead = (props) => (
	<Box
		{...props}
		className='mastHead'
		sx={{
			variant: 'layout.mastHead',
		}}
	>
		{props.children}
	</Box>
)

Masthead.propTypes = {}

Masthead.defaultProps = {}

export default Masthead
