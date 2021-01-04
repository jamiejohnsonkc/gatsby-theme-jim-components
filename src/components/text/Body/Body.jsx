/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Body = ({
    as,
    variant = 'body',
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

Body.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
    fontFamily: PropTypes.string,
    maxWidth: PropTypes.string,
}

Body.defaultProps = {
    children:
        'Long-form content provides context and support for key messages.',
    variant: 'styles.b2',
    fontWeight: 'regular',
    fontFamily: 'body',
    maxWidth: '42em',
}

export default Body
