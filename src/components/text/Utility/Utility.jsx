/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Text } from 'theme-ui'
import React from 'react'

//TODO Refactor like caption?

const Utility = ({ variant, ...props }) => (
    <Text
        {...props}
        sx={{
            variant: `${variant}`,
        }}
        children={props.children}
    />
)

Utility.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
}

Utility.defaultProps = {
    variant: 'styles.u3',
    children: 'Utilities add exposition to Ui elements',
}
export default Utility
