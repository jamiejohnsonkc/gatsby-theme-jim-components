/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'

const Display = ({ as, ...props }) => (
    <Text
        {...props}
        as={as}
        sx={{
            variant: 'display',
        }}
        children={props.children}
    />
)

export default Display
