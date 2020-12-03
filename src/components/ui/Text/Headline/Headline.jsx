/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import PropTypes from 'prop-types'
import React from 'react'

const Headline = ({ variant = 'headline', headlineAs, ...props }) => (
    <Heading
        {...props}
        as={headlineAs}
        sx={{
            variant: `${variant}`,
        }}
    >
        {props.children}
    </Heading>
)

Headline.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
    headlineAs: PropTypes.string,
}

Headline.defaultProps = {
    children: 'Headlines get to the point',
    headlineAs: 'h1',
    variant: 'styles.h1',
}

export default Headline
