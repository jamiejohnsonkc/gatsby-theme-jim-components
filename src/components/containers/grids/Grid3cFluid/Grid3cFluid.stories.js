/** @jsx jsx */
import { jsx, Grid, Box } from 'theme-ui'
import React from 'react'
import Grid3cFluid from './Grid3cFluid'

export default {
	title: 'Layout/Grid/FluidWidth3Col',
}

export const standard = (props) => (
	<Grid columns={[3, '1fr 1fr 1fr']}>
		<Box bg='primary'>Box1 Content</Box>
		<Box bg='secondary'>Box2 Content</Box>
		<Box bg='primary'>Box3 Content</Box>
	</Grid>
)
