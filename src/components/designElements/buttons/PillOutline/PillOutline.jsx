/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import SysButton from '../../../system/atoms/SysButton'

const PillOutline = ({
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
            variant: `${buttonVariant}`,
        }}
    >
        {buttonChild}
    </SysButton>
)

PillOutline.propTypes = {
    buttonVariant: PropTypes.any,
    buttonChild: PropTypes.string,
}

PillOutline.defaultProps = {
    buttonVariant: 'buttons.lg',
    buttonChild: 'button',
}

export default PillOutline
