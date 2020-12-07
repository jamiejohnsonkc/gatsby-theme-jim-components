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
    boxShadow,
    bg,
    color,
    borderColor,
    borderStyle,
    borderWidth,
    borderRadius,
    buttonRadius,
    backgroundImage,
    buttonSize,
    px,
    py,
    fontSize,
    minWidth,
    letterSpacing,
    ...props
}) => (
    <button
        {...props}
        type={buttonType}
        sx={{
            bg,
            px,
            py,
            fontSize,
            minWidth,
            letterSpacing,
            boxShadow,
            color,
            borderColor,
            borderStyle,
            borderWidth,
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
    buttonType: PropTypes.string,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.string,
    // backgroundImage: PropTypes.string,
}

Button.defaultProps = {
    buttonChild: 'button',
    buttonRadius: 'rounded',
    buttonType: 'button',
    buttonVariant: 'buttons.primary.lg',
    borderColor: 'transparent',
    borderWidth: '.1618em',
}

export default Button
