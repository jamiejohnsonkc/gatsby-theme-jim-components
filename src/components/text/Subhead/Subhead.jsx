/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Subhead = ({
    variant = 'Subhead',
    as,
    mb,
    color,
    fontFamily,
    fontWeight,
    maxWidth,
    ...props
}) => (
    <Heading
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
    </Heading>
)

Subhead.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.string,
    maxWidth: PropTypes.string,
    as: PropTypes.string,
}

Subhead.defaultProps = {
    children: 'Subheads augment headlines.',
    as: 'h2',
    variant: 'styles.h1',
    fontWeight: 'semibold',
    fontFamily: 'heading',
    maxWidth: '42em',
}

export default Subhead
