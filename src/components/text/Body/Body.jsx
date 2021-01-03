/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Body = ({ as, variant = 'body', ...props }) => (
    <Text
        {...props}
        as={as}
        sx={{
            variant: `${variant}`,
        }}
        children={props.children}
    />
)

Body.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
}

Body.defaultProps = {
    children:
        'Long form content provides context and support for key messages.',
    variant: 'styles.b2',
}

export default Body
