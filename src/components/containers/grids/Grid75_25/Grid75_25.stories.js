/** @jsx jsx */
import { jsx, Box, Grid } from 'theme-ui'
import React from 'react'

export default {
	title: 'Layout/Grid/[1, `3fr, 1fr`]',
}

export const standard = (props) => (
	<Grid columns={[1, '3fr 1fr']}>
		<Box display='grid' bg='primary'>
			Box 1 content
		</Box>
		<Box display='grid' bg='secondary'>
			Box 2 content
		</Box>
	</Grid>
)
