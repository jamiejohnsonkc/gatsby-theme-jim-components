/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

// const Paragraph = ({ as, ...props }) => (

const Paragraph = ({ as, ...props }) => (
    <Text
        {...props}
        as={as}
        sx={{
            variant: 'paragraph',
        }}
    >
        {props.children}
    </Text>
)

Paragraph.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.any,
}

Paragraph.defaultProps = {
    children: 'Paragraphs provide evidence and support for key claims.',
    variant: 'p2',
}

export default Paragraph
