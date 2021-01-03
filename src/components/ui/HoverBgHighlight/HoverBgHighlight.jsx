/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

// TODO refactor out spans & style

// const BackgroundSpan = (props) => <span>{props.children}</span>

const HoverBgHighlight = ({
    textColor,
    // outlineColor,
    differenceColor,
    ...props
}) => (
    <span
        {...props}
        sx={{
            // color: 'text',
            color: `${textColor}`,
            cursor: 'pointer',
            display: [
                'block',
                'inline-flex',
                'inline-flex',
                'inline-flex',
                'inline-flex',
            ],
            margin: '0px',
            mt: [4, 4, 0, 0, 0],
            mb: [4, 0, 0, 0, 0],
            ml: [0, 2, 2, 2, 2],
            // outlineColor: 'primary',
            // outlineColor: `${outlineColor}`,
            overflow: 'hidden',
            position: 'relative',
            padding: ['0px', '0px', '0px 8px', '0px 8px', '0px 8px'],
            textDecoration: 'none',
            fontWeight: 'heavy',
            transition:
                'color 200ms ease-in-out 100ms, transform 100ms ease-out 0s',
            willChange: 'color, transform, fontWeight',
            zIndex: '1',
            '&:hover': {
                color: '#000',
            },
            '&::before, &::after': {
                content: '""',
                display: 'block',
                height: '100%',
                left: '0px',
                position: 'absolute',
                top: '0px',
                transform: 'translateX(-110%)',
                transformOrigin: 'left center',
                transition: 'transform 100ms ease-in 0s',
                width: '100%',
                willChange: 'transform',
                zIndex: '-1',
            },
            '&::before': {
                backgroundColor: 'background',
                mixBlendMode: 'difference',
                pointerEvents: 'none',
                zIndex: '1',
            },
            '&::after': {
                backgroundColor: `${differenceColor}`,
                borderRadius: 2,
            },

            '&:hover::before, &:hover::after': {
                transform: 'translateX(0px)',
                transition: 'transform 200ms ease-in-out 100ms',
            },
            '&:hover>span': {
                transform: 'scaleX(0) translateY(-1px)',
            },
        }}
    >
        {props.children}
    </span>
)

HoverBgHighlight.propTypes = {
    children: PropTypes.string,
    differenceColor: PropTypes.string,
    outlineColor: PropTypes.string,
    textColor: PropTypes.string,
}

HoverBgHighlight.defaultProps = {
    differenceColor: 'rgb(252,86,11)',
    outlineColor: 'transparent',
    textColor: 'text',
    children: 'Hover: Background Highlight',
}

export default HoverBgHighlight
