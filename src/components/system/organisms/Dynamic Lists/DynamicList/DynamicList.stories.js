/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import DynamicLi from '../DynamicLi/DynamicLi'

export default {
title: 'Containers/Lists',
}

export const DynamicList = ({ list }) => (
	<ul>
		{list.map((item) => (
			<DynamicLi key={item.id} item={item} />
		))}
	</ul>
)
