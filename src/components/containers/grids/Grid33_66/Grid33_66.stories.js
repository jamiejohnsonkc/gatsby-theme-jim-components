/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import Grid33_66 from './Grid33_66'

export default {
	title: 'Layout/Grid/[2, `1fr, 2fr`]',
}

export const standard = (props) => (
	<Grid33_66>
		<Box bg='primary'>Box1 Content</Box>
		<Box bg='secondary'>Box2 Content</Box>
		<Box bg='primary'>Box3 Content</Box>
		<Box bg='secondary'>Box4 Content</Box>
	</Grid33_66>
)
