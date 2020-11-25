/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types' // eslint-disable-line import/no-extraneous-dependencies

//TODO compare with original component from saas spec (or prof services?)

const Pancake = ({ pancakeVariant, ...props }) => (
    <Box
        className="Pancake"
        {...props}
        sx={{
            variant: `${pancakeVariant}`,
        }}
    />
)

Pancake.propTypes = {
    pancakeVariant: PropTypes.any,
}

Pancake.defaultProps = {
    pancakeVariant: '',
}

export default Pancake
