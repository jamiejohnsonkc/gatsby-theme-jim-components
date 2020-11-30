/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import SysButton from '../../../system/atoms/SysButton'
import Pill from '../Pill'

const PillOutline = ({
    borderColor,
    border,
    color,
    bg,
    buttonVariant,
    buttonChild,
    ...props
}) => (
    <Pill
        {...props}
        sx={{
            border: 'base',
            borderColor,
            color,
            bg: 'transparent',
            variant: `${buttonVariant}`,
        }}
    >
        {buttonChild}
    </Pill>
)

PillOutline.propTypes = {
    buttonVariant: PropTypes.any,
    buttonChild: PropTypes.string,
    borderColor: PropTypes.string,
    color: PropTypes.string,
}

PillOutline.defaultProps = {
    buttonVariant: 'buttons.lg',
    buttonChild: 'button',
    borderColor: 'primary',
    color: 'primary',
}

export default PillOutline
