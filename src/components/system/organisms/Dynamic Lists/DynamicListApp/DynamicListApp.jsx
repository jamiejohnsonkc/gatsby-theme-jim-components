/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import { List } from '../ListFpoData/ListFpoData'
import DynamicList from '../DynamicList/DynamicList'

const DynamicListApp = (props) => <DynamicList list={List} />

export default DynamicListApp
