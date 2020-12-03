/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Legal = ({ variant = 'legal', legalDisplay, ...props }) => (
    <Text
        {...props}
        sx={{
            variant: `${variant}`,
            display: `${legalDisplay}`,
        }}
    >
        {props.children}
    </Text>
)

Legal.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
    legalDisplay: PropTypes.string,
}

Legal.defaultProps = {
    children: 'The large print giveth and the fine print taketh away',
    legalDisplay: 'inline-block',
}

export default Legal
