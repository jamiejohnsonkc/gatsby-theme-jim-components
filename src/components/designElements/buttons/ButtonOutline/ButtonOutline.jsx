/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import SysButton from '../../../system/atoms/SysButton'

const ButtonOutline = ({
    border,
    borderColor,
    color,
    bg,
    buttonVariant,
    buttonChild,
    ...props
}) => (
    <SysButton
        {...props}
        sx={{
            border,
            borderColor,
            color,
            bg,
            borderRadius: 4,
            variant: `${buttonVariant}`,
        }}
    >
        {buttonChild}
    </SysButton>
)

ButtonOutline.propTypes = {
    buttonVariant: PropTypes.string,
    buttonChild: PropTypes.string,
}

ButtonOutline.defaultProps = {
    buttonVariant: 'buttons.lg',
    buttonChild: 'button',
}

export default ButtonOutline
