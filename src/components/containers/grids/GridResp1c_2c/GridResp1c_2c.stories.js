/** @jsx jsx */
import { jsx, Grid, Box } from 'theme-ui'
import React from 'react'

export default {
	title: 'Layout Elements/Grids/Columns/variable/[1,2]',
}

export const standard = (props) => (
	<Grid columns={[1, 2, 2, 2]}>
		<Box bg='primary'>Box1 Content</Box>
		<Box bg='secondary'>Box2 Content</Box>
	</Grid>
)
