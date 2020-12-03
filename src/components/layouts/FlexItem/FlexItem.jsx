/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const FlexItem = ({ flex, flexItemVariant, minWidth, minHeight, ...props }) => (
    <Box
        {...props}
        sx={{
            minWidth,
            minHeight,
            flex: `${flex}`,
            variant: `${flexItemVariant}`,
        }}
    >
        {props.children}
    </Box>
)

FlexItem.propTypes = {
    flex: PropTypes.string,
    flexItemVariant: PropTypes.string,
    minWidth: PropTypes.string,
    minHeight: PropTypes.string,
}

FlexItem.defaultProps = {
    flex: '1 0',
}

export default FlexItem
