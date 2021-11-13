/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

export default {
	title: 'Lists/Dynamic Lists/Modular/List Item',
}

export const DynamicLi = ({ item }) => (
	<li>
		<Box>{item.id}</Box>
		<Box>{item.firstname}</Box>
		<Box>{item.lastname}</Box>
		<Box>{item.year}</Box>
	</li>
)
