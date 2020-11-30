/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Legal = ({ variant = 'legal', ...props }) => (
    <Text
        {...props}
        sx={{
            variant: `${variant}`,
        }}
    >
        {props.children}
    </Text>
)

Legal.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
}

Legal.defaultProps = {
    children: 'The large print giveth and the fine print taketh away',
}

export default Legal
