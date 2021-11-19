/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import SysButton from '../../../system/atoms/SysButton/SysButton'

const Button = (props) => (
    <SysButton
        className="defaultButton"
        {...props}
        sx={{
            color: 'background',
            bg: 'primary',
            variant: `${props.buttonVariant}`,
        }}
    />
)

Button.propTypes = {
    buttonVariant: PropTypes.string,
    children: PropTypes.string,
}

Button.defaultProps = {
    buttonVariant: 'buttons.lg',
    children: 'Button',
}

export default Button
