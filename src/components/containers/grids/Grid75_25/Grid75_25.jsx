/** @jsx jsx */
import { jsx, Grid, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

//TODO BEWARE this file was not used in production. should presume it is an unfinished iteration. see production/ProBenefits for solution

const Grid75_25 = (props) => (
	<Grid
		py={4}
		my={4}
		columns={[1, 1, '3fr 1fr', '3fr 1fr']}
		margin={[`0 auto`, 0]}
	>
		<Box display='grid'>{props.content75}</Box>
		<Box display='grid'>{props.content25}</Box>
	</Grid>
)

Grid75_25.propTypes = {
	content25: PropTypes.any,
	content75: PropTypes.any,
}

Grid75_25.defaultProps = {
	content25: <Box bg='primary' />,
	content75: <Box bg='secondary' />,
}

export default Grid75_25
