/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Display = ({ as, ...props }) => (
    <Text
        {...props}
        as={as}
        sx={{
            variant: 'display',
        }}
        children={props.children}
    />
)

Display.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
}

Display.defaultProps = {
    children: 'Display text entices curiosity and continued engagement.',
    variant: 'styles.d1',
}

export default Display
