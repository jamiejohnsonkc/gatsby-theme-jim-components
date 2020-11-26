/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import FpoImageWireFrame from './FpoImageWireFrame'


export default {
	title: 'Dev Utilities/FpoImageWireFrame',
}

export const standard = (props) => (
	<Box height='50vh' width='50vw'>
		<FpoImageWireFrame />
	</Box>
)
