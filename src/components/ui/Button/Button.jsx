/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import SysButton from '../../primitives/SysButton/SysButton'

// TODO ensure props are consistent across buttons

const Button = ({
    buttonVariant = 'primary',
    backgroundImage,
    bg,
    borderColor,
    borderRadius,
    borderStyle,
    borderWidth,
    boxShadow,
    buttonChild,
    buttonRadius,
    buttonSize,
    buttonType,
    color,
    fontSize,
    letterSpacing,
    minWidth,
    px,
    py,
    fontWeight,
    ...props
}) => (
    <button
        {...props}
        type={buttonType}
        sx={{
            backgroundImage,
            bg,
            fontWeight,
            borderColor,
            borderRadius: `${buttonRadius}`,
            borderStyle,
            borderWidth,
            boxShadow,
            color,
            fontSize,
            letterSpacing,
            minWidth,
            px,
            py,
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
    fontWeight: PropTypes.string,
    letterSpacing: PropTypes.string,
    // backgroundImage: PropTypes.string,
}

Button.defaultProps = {
    buttonChild: 'button',
    buttonRadius: 'rounded',
    buttonType: 'button',
    buttonVariant: 'buttons.solid.primary.lg',
    borderColor: 'transparent',
    borderWidth: '.1618em',
    fontWeight: 'bold',
    letterSpacing: 'loose',
}

export default Button
