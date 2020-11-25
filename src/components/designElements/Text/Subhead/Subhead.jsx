/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import React from 'react'

//TODO Refactor like caption?

const Subhead = ({ as, ...props }) => (
    <Heading
        {...props}
        as={as}
        sx={{
            variant: 'subhead',
        }}
        children={props.children}
    />
)

export default Subhead
