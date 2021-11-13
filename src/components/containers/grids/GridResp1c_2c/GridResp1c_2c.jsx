/** @jsx jsx */
import { jsx, Grid, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const GridResp1c_2c = (props) => (
	<Grid columns={[1, 2, 2, 2]}>
		<Box>{props.contentBox1}</Box>
		<Box>{props.contentBox2}</Box>
	</Grid>
)

GridResp1c_2c.propTypes = {
	contentBox1: PropTypes.any,
	contentBox2: PropTypes.any,
}

GridResp1c_2c.defaultProps = {
	contentBox1: PropTypes.any,
	contentBox2: PropTypes.any,
}

export default GridResp1c_2c
