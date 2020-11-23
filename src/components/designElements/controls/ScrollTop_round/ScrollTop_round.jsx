/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import SysButton from '../../../system/atoms/SysButton'
import { GoChevronUp } from 'react-icons/go'
// import Icon from '../../../../system/atoms/Icon'

const ScrollTop_round = (props) => (
	<SysButton
		{...props}
		sx={{
			variant: 'buttons.scrollTop.fixed',
			bg: 'primary',
			borderRadius: '100%',
			height: '2em',
			width: '2em',
		}}
	>
		{/* <Icon
			{...props}
			sx={{
				color: 'background',
			}}
			iconName='ChevronUp'
			size='1.25em'
		/> */}
		<GoChevronUp />
	</SysButton>
)

export default ScrollTop_round
