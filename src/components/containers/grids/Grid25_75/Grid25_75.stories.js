/** @jsx jsx */
import { jsx, Box, Grid } from 'theme-ui'
import React from 'react'

export default {
	title: 'Layout Elements/Grids/Columns/variable/[1, `1fr, 3fr`]',
}

export const standard = (props) => (
	<Grid columns={[1, '1fr 3fr']}>
		<Box bg='primary'>Box 1 content</Box>
		<Box bg='secondary'>Box 2 content</Box>
	</Grid>
)
