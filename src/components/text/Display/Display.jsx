/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Display = ({
    as,
    variant = 'display',
    fontFamily,
    fontWeight,
    maxWidth,
    ...props
}) => (
    <Text
        {...props}
        as={as}
        sx={{
            variant: `${variant}`,
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
    fontWeight: PropTypes.string,
    maxWidth: PropTypes.string,
}

Display.defaultProps = {
    children: 'Display text entices curiosity and continued engagement.',
    variant: 'styles.d1',
    fontWeight: 'regular',
    fontFamily: 'heading',
    maxWidth: '42em',
}

export default Display
