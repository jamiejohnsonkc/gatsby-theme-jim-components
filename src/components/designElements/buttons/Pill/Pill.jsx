/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import SysButton from '../../../system/atoms/SysButton'

const Pill = ({ buttonTextColor, ...props }) => (
    <SysButton
        className="pillButton"
        {...props}
        sx={{
            borderRadius: '9999px',
            bg: 'primary',
            variant: 'buttons.lg',
            mb: 4,
            '& > a': {
                color: `${buttonTextColor}`,
                textDecoration: 'none',
            },
        }}
    />
)

Pill.propTypes = {
    buttonVariant: PropTypes.string,
    buttonTextColor: PropTypes.string,
}

Pill.defaultProps = {
    buttonVariant: 'buttons.lg',
    buttonTextColor: 'revText',
}

export default Pill
