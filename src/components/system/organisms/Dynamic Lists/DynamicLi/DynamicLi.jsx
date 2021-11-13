/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const DynamicLi = ({ item }) => (
	<li>
		<Box>{item.id}</Box>
		<Box>{item.firstname}</Box>
		<Box>{item.lastname}</Box>
		<Box>{item.year}</Box>
	</li>
)

DynamicLi.propTypes = {}

DynamicLi.defaultProps = {}

export default DynamicLi
