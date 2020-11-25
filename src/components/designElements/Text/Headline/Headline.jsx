/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import React from 'react'

//TODO Refactor like caption?

const Headline = ({ as, ...props }) => (
    <Heading
        {...props}
        as={as}
        sx={{
            variant: 'headline',
        }}
        children={props.children}
    />
)

// const Headline = (props) => (
// 	<Text variant='headline' children={props.children} />
// )

export default Headline
