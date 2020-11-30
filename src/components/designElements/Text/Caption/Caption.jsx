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
        'Figure 1.a illustrates Aliquip officia tempor dolor dolor nisi nostrud qui magna.',
}

export default Caption
