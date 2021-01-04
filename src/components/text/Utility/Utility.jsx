/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

//TODO Refactor like caption?

const Utility = ({ variant = 'utility', fontFamily, fontWeight, ...props }) => (
    <Text
        {...props}
        sx={{
            variant: `${variant}`,
            fontFamily: `${fontFamily}`,
            fontWeight: `${fontWeight}`,
        }}
        children={props.children}
    />
)

Utility.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.string,
}

Utility.defaultProps = {
    variant: 'styles.u2',
    children: 'Utilities add exposition to Ui elements',
    fontFamily: 'mono',
    fontWeight: 'regular',
}

export default Utility
