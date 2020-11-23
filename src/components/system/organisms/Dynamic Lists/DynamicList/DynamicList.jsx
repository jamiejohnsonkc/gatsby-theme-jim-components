/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import DynamicLi from '../DynamicLi/DynamicLi'

const DynamicList = ({ list }) => (
	<ul>
		{list.map((item) => (
			<DynamicLi key={item.id} item={item} />
		))}
	</ul>
)

DynamicList.propTypes = {}

DynamicList.defaultProps = {}

export default DynamicList
