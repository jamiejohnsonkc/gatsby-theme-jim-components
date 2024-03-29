/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Box } from 'theme-ui'
import React from 'react'
// import { Link } from 'gatsby'

const HoverTextFill = (props) => (
    <Box
        {...props}
        sx={{
            position: 'relative',
            display: 'inline-block',
            overflow: 'hidden',
            '&:hover > span': {
                transform: 'translateX(0)',
            },

            '&:hover > span:before': {
                transform: 'translateX(0)',
            },
        }}
    >
        <span
            {...props}
            sx={{
                position: 'absolute',
                top: '0',
                left: '0',
                overflow: 'hidden',
                transform: 'translateX(-100%)',

                '&:before': {
                    display: 'inline-block',
                    content: 'attr(data-content)',
                    transform: 'translateX(100%)',
                },
            }}
            data-content={props.children}
            aria-hidden="true"
        />
        {props.children}
    </Box>
)

HoverTextFill.propTypes = {
    children: PropTypes.any,
}

HoverTextFill.defaultProps = {
    children: 'default text',
}

export default HoverTextFill
