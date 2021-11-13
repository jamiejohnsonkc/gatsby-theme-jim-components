/** @jsx jsx */
import { jsx, Grid, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const GridResp2c_3c = (props) => (
	<Grid columns={[2, 2, 3, 3]} gap={8}>
		<Box>{props.boxContent1}</Box>
		<Box>{props.boxContent2}</Box>
		<Box>{props.boxContent3}</Box>
		<Box>{props.boxContent4}</Box>
		<Box>{props.boxContent5}</Box>
		<Box>{props.boxContent6}</Box>
	</Grid>
)

GridResp2c_3c.propTypes = {
	boxContent1: PropTypes.any,
	boxContent2: PropTypes.any,
	boxContent3: PropTypes.any,
	boxContent4: PropTypes.any,
	boxContent5: PropTypes.any,
	boxContent6: PropTypes.any,
}

GridResp2c_3c.defaultProps = {
	boxContent1: 'Box1 Content',
	boxContent2: 'Box2 Content',
	boxContent3: 'Box3 Content',
	boxContent4: 'Box4 Content',
	boxContent5: 'Box5 Content',
	boxContent6: 'Box6 Content',
}

export default GridResp2c_3c
