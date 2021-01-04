/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import PropTypes from 'prop-types'
import React from 'react'

//TODO Refactor like caption?

const Subline = ({
    as,
    variant = 'subline',
    mb,
    color,
    fontFamily,
    fontWeight,
    maxWidth,
    ...props
}) => (
    <Text
        {...props}
        as={as}
        sx={{
            mb,
            color,
            variant: `${variant}`,
            fontFamily: `${fontFamily}`,
            fontWeight: `${fontWeight}`,
            maxWidth: `${maxWidth}`,
        }}
    >
        {props.children}
    </Text>
)

Subline.propTypes = {
    as: PropTypes.string,
    children: PropTypes.string,
    color: PropTypes.any,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.string,
    maxWidth: PropTypes.string,
    mb: PropTypes.any,
    variant: PropTypes.string,
}

Subline.defaultProps = {
    children:
        'Sublines help to simply and provide structure in long-form content.',
    as: 'h3',
    variant: 'styles.h4',
    fontWeight: 'regular',
    fontFamily: 'heading',
    maxWidth: '42em',
}

export default Subline
