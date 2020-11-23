import React from 'react'
import DynamicListApp from './DynamicListApp'
import DynamicList from '../DynamicList/DynamicList'
import { List } from '../ListFpoData/ListFpoData.js'

export default {
	title: 'Lists/Dynamic_Lists/Modular/App',
}

export const standard = (props) => <DynamicList list={List} />
