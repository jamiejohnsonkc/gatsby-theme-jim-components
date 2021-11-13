/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import SysButton from '../../../system/atoms/SysButton'
// import Icon from '../../../../system/atoms/Icon'
import { GoChevronUp } from 'react-icons/go'

const ScrollTop = (props) => (
	<SysButton
		{...props}
		sx={{
			variant: 'buttons.scrollTop.fixed',
			bg: 'primary',
			// padding: 1,
			verticalAlign: 'sub',
		}}
	>
		{/* <Icon
			{...props}
			sx={{
				color: 'background',
			}}
			iconName='ChevronUp'
			size='1em'
		/> */}
		<GoChevronUp />
	</SysButton>
)

ScrollTop.propTypes = {}

ScrollTop.defaultProps = {}

export default ScrollTop
