/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import SysButton from '../../../system/atoms/SysButton/SysButton'

// TODO ensure props are consistent across buttons

const Button = ({ color, bg, buttonChild, buttonVariant, ...props }) => (
    <SysButton
        {...props}
        // variant={buttonVariant}
        sx={{
            color,
            bg,
            borderRadius: 4,
            variant: `${buttonVariant}`,
        }}
    >
        {buttonChild}
    </SysButton>
)

Button.propTypes = {
    // buttonVariant: PropTypes.string,
    buttonChild: PropTypes.string,
}

Button.defaultProps = {
    buttonChild: 'Child',
    // buttonVariant: 'buttons.lg',
}

export default Button
