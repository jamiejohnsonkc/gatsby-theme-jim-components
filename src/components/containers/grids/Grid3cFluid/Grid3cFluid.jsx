/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const Grid3cFluid = (props) => (
	<Grid columns={[3, '1fr 1fr 1fr']}>
		<Box>{props.boxContent1}</Box>
		<Box>{props.boxContent2}</Box>
		<Box>{props.boxContent3}</Box>
	</Grid>
)

Grid3cFluid.propTypes = {
	boxContent1: PropTypes.any,
	boxContent2: PropTypes.any,
	boxContent3: PropTypes.any,
}

Grid3cFluid.defaultProps = {
	boxContent1: 'Box1 Content',
	boxContent2: 'Box2 Content',
	boxContent3: 'Box3 Content',
}

export default Grid3cFluid
