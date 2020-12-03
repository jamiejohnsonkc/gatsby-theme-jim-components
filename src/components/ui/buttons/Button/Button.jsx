/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import SysButton from '../../../primitives/SysButton/SysButton'

// TODO ensure props are consistent across buttons

const Button = ({
    color,
    bg,
    buttonChild,
    buttonVariant,
    altVariant,
    ...props
}) => (
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
    buttonChild: 'button',
    // buttonVariant: 'buttons.lg',
}

export default Button
