/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import FlexBlock from '../FlexBlock'

const DuoBlock = (props) => (
	<row>
		<FlexBlock {...props}>{props.flexItemContent}</FlexBlock>
		<FlexBlock {...props}>{props.flexItemContent2}</FlexBlock>
	</row>
)

DuoBlock.propTypes = {}

DuoBlock.defaultProps = {}

export default DuoBlock
