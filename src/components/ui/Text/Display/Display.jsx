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
    children: 'Display text entices curiosity and continued engagement.',
    variant: 'd1',
}

export default Display
