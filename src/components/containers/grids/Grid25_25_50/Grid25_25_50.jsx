/** @jsx jsx */
import { jsx, Grid, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const Grid25_25_50 = (props) => (
	<Grid columns={[1, 1, '1fr 1fr 2fr', '1fr 1fr 2fr']}>
		<Box>{props.boxContent1}</Box>
		<Box>{props.boxContent2}</Box>
		<Box>{props.boxContent3}</Box>
	</Grid>
)

Grid25_25_50.propTypes = {
	boxContent1: PropTypes.any,
	boxContent2: PropTypes.any,
	boxContent3: PropTypes.any,
}

Grid25_25_50.defaultProps = {
	boxContent1: 'Box Content 1',
	boxContent2: 'Box Content 2',
	boxContent3: 'Box Content 3',
}

export default Grid25_25_50
