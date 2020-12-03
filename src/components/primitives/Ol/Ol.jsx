/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

//TODO refactor

const Ol = (props) => (
    <ol
        {...props}
        sx={{
            variant: `${props.olVariant}`,
        }}
        children={props.children}
    />
)

Ol.propTypes = {}

Ol.defaultProps = {}

export default Ol
