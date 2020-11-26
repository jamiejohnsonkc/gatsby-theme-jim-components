import React from 'react'
import DynamicListApp from './DynamicListApp'
import DynamicList from '../DynamicList/DynamicList'
import { List } from '../ListFpoData/ListFpoData.js'

export default {
	title: 'Containers/Lists/List Map',
}

export const standard = (props) => <DynamicList list={List} />
