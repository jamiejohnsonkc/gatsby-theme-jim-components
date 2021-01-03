/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Caption = ({ variant = 'caption', ...props }) => (
    <Text
        {...props}
        sx={{
            variant: `${variant}`,
        }}
    >
        {props.children}
    </Text>
)

Caption.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
}

Caption.defaultProps = {
    children:
        'Figure 1. Captions provide information sources and/or additional context.',
    variant: 'styles.u3',
}

export default Caption
