/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Headline = ({
    as,
    variant = 'headline',
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

Headline.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.string,
    maxWidth: PropTypes.string,
    as: PropTypes.string,
}

Headline.defaultProps = {
    children: 'Headlines get to the point',
    variant: 'styles.h1',
    fontWeight: 'bold',
    fontFamily: 'heading',
    maxWidth: '12em',
    as: 'h1',
}

export default Headline
