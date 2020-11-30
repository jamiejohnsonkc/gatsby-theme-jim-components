/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Display = ({ variant = 'display', ...props }) => (
    <Text
        {...props}
        sx={{
            variant: `${variant}`,
        }}
    >
        {props.children}
    </Text>
)

Display.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
}

Display.defaultProps = {
    children:
        'Display text for summarizing and calling attention to supportive messages within long-form content.',
    variant: 'd1',
}

export default Display
