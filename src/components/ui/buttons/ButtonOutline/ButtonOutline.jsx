/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
// import SysButton from '../../primitives/SysButton'

const ButtonOutline = ({
    border,
    borderColor,
    color,
    bg,
    buttonVariant,
    buttonChild,
    buttonType,
    ...props
}) => (
    <Button
        {...props}
        sx={{
            border: 'base',
            borderColor,
            color,
            bg: 'transparent',
            borderRadius: 4,
            variant: `${buttonVariant}`,
        }}
    >
        {buttonChild}
    </Button>
)

ButtonOutline.propTypes = {
    buttonVariant: PropTypes.any,
    buttonChild: PropTypes.string,
    borderColor: PropTypes.string,
    color: PropTypes.string,
}

ButtonOutline.defaultProps = {
    buttonVariant: 'buttons.lg',
    buttonChild: 'button',
    borderColor: 'primary',
    color: 'primary',
}

export default ButtonOutline
