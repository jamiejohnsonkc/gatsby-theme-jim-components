/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import SysButton from '../../../system/atoms/SysButton'
import PropTypes from 'prop-types'

const ButtonOutline = (props) => (
	<SysButton
		className='buttonOutline'
		{...props}
		sx={{
			borderColor: 'primary',
			border: '.125rem',
			borderStyle: 'solid',
			color: 'primary',
			bg: 'transparent',
			variant: `${props.buttonVariant}`,
		}}
	/>
)

ButtonOutline.propTypes = {
	buttonVariant: PropTypes.string,
}

ButtonOutline.defaultProps = {
	buttonVariant: 'buttons.lg',
}

export default ButtonOutline
