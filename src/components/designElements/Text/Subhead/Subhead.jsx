/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Subhead = ({ variant = 'Subhead', subheadAs, ...props }) => (
    <Heading
        {...props}
        as={subheadAs}
        sx={{
            variant: `${variant}`,
        }}
    >
        {props.children}
    </Heading>
)

Subhead.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
    subheadAs: PropTypes.string,
}

Subhead.defaultProps = {
    children: 'Subheads augment headlines.',
    subheadAs: 'h2',
}

export default Subhead
