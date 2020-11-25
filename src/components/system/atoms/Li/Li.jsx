/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

//TODO refactor

const Li = (props) => (
    <li
        {...props}
        sx={{
            variant: `${props.liVariant}`,
        }}
        children={props.children}
    />
)

Li.propTypes = {}

Li.defaultProps = {}

export default Li
