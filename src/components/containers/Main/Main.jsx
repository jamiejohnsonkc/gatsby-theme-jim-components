/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const Main = (props) => (
	<Box
		as='main'
		{...props}
		sx={{
			variant: 'layout.main',
		}}
	/>
)

Main.propTypes = {}

Main.defaultProps = {}

export default Main
