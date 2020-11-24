/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import SysButton from '../../../system/atoms/SysButton'

const Pill = ({ color, bg, buttonChild, buttonVariant, ...props }) => (
    <>
        <SysButton
            {...props}
            sx={{
                color,
                bg,
                variant: `${buttonVariant}`,
                '& > a': {
                    color: `${color}`,
                    textDecoration: 'none',
                },
            }}
        >
            {buttonChild}
        </SysButton>
    </>
)

Pill.propTypes = {
    buttonVariant: PropTypes.string,
    buttonTextColor: PropTypes.string,
    buttonChild: PropTypes.string,
}

Pill.defaultProps = {
    buttonVariant: 'buttons.lg',
    buttonTextColor: 'revText',
    buttonChild: 'button',
}

export default Pill
