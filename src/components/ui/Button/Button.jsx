/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import SysButton from '../../primitives/SysButton/SysButton'

// TODO ensure props are consistent across buttons

const Button = ({
    buttonVariant = 'primary',
    buttonChild,
    buttonType,
    bg,
    color,
    border,
    borderRadius,
    buttonRadius,
    ...props
}) => (
    <button
        {...props}
        type={buttonType}
        sx={{
            bg,
            color,
            border,
            borderRadius: `${buttonRadius}`,
            variant: `${buttonVariant}`,
        }}
    >
        {buttonChild}
    </button>
)

Button.propTypes = {
    // buttonVariant: PropTypes.string,
    buttonChild: PropTypes.string,
    buttonRadius: PropTypes.string,
    buttonVariant: PropTypes.string,
}

Button.defaultProps = {
    buttonChild: 'button',
    buttonRadius: 'rounded',
    buttonVariant: 'buttons.primaryLg',
    // buttonVariant: 'buttons.lg',
}

export default Button
