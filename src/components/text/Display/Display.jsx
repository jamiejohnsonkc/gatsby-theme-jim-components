/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Display = ({ as, fontFamily, fontWeight, maxWidth, ...props }) => (
    <Text
        {...props}
        as={as}
        sx={{
            variant: 'display',
            fontFamily: `${fontFamily}`,
            fontWeight: `${fontWeight}`,
            maxWidth: `${maxWidth}`,
        }}
        children={props.children}
    />
)

Display.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
    fontFamily: PropTypes.string,
    maxWidth: PropTypes.string,
}

Display.defaultProps = {
    children: 'Display text entices curiosity and continued engagement.',
    fontWeight: 'regular',
    fontFamily: 'heading',
    variant: 'styles.d1',
    maxWidth: '42em',
}

export default Display
