/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import SysButton from '../../../primitives/SysButton'

const Pill = ({ color, bg, buttonChild, buttonVariant, border, ...props }) => (
    <>
        <SysButton
            {...props}
            sx={{
                color,
                bg,
                border,
                variant: `${buttonVariant}`,
                borderRadius: '3em',
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
    buttonChild: 'Pill',
}

export default Pill
