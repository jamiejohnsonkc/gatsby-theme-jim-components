/** @jsx jsx */
import { jsx, Grid, Box } from 'theme-ui'
import React from 'react'

export default {
	title: 'Layout Elements/Grids/Columns/variable/[2,2,3, 3]',
}

export const standard = (props) => (
	<Grid columns={[2, 2, 3, 3]} gap={8}>
		<Box bg='primary'>Box1 Content</Box>
		<Box bg='secondary'>Box2 Content</Box>
		<Box bg='primary'>Box3 Content</Box>
		<Box bg='secondary'>Box4 Content</Box>
		<Box bg='primary'>Box5 Content</Box>
		<Box bg='secondary'>Box6 Content</Box>
	</Grid>
)
