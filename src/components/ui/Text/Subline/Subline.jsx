/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import PropTypes from 'prop-types'
import React from 'react'

//TODO Refactor like caption?

const Subline = ({ variant = 'subline', sublineAs, ...props }) => (
    <Heading
        {...props}
        as={sublineAs}
        sx={{
            variant: `${variant}`,
        }}
    >
        {props.children}
    </Heading>
)

Subline.propTypes = {
    children: PropTypes.string,
    sublineAs: PropTypes.string,
    variant: PropTypes.string,
}

Subline.defaultProps = {
    children:
        'Sublines help to simply and provide structure in long-form content.',
    sublineAs: 'h3',
    variant: 'sl2',
}

export default Subline
