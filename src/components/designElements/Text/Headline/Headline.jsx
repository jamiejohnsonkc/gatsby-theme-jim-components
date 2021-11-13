/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Headline = ({ as, variant = 'headline', mb, color, ...props }) => (
    <Heading
        {...props}
        as={as}
        sx={{
            variant: `${variant}`,
            mb,
            color,
        }}
    >
        {props.children}
    </Heading>
)

Headline.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
}

Headline.defaultProps = {
    children: 'Headlines get to the point',
    variant: 'styles.h3',
}

export default Headline
