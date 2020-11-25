/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'

//TODO Refactor like caption?

const Utility = ({ variant = 'utility', ...props }) => (
    <Text
        {...props}
        sx={{
            variant: `${variant}`,
        }}
        children={props.children}
    />
)

export default Utility
