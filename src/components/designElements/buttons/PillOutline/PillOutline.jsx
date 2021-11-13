/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import SysButton from '../../../system/atoms/SysButton'
import PropTypes from 'prop-types'

const PillOutline = (props) => (
	<SysButton
		{...props}
		className='pillOutlineButton'
		sx={{
			borderColor: 'primary',
			border: '.125rem',
			borderRadius: '9999px',
			borderStyle: 'solid',
			color: 'primary',
			bg: 'transparent',
			variant: `${props.buttonVariant}`,
		}}
	/>
)

PillOutline.propTypes = {
	buttonVariant: PropTypes.any,
}

PillOutline.defaultProps = {
	buttonVariant: 'buttons.lg',
}

export default PillOutline
