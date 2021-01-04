/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Caption = ({ variant = 'caption', fontFamily, fontWeight, ...props }) => (
    <Text
        {...props}
        sx={{
            variant: `${variant}`,
            fontFamily: `${fontFamily}`,
            fontWeight: `${fontWeight}`,
        }}
    >
        {props.children}
    </Text>
)

Caption.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.string,
}

Caption.defaultProps = {
    children:
        'Figure 1. Captions provide information sources and/or additional context.',
    variant: 'styles.u3',
    fontFamily: 'heading',
    fontWeight: 'regular',
}

export default Caption
