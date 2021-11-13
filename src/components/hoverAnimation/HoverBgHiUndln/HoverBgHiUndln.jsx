/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import styled from '@emotion/styled'

// TODO rename to reflect animated underline

const BackgroundSpan = styled.span`
     {
    }
`

const DecorationSpan = styled.span`
     {
    }
`

const HoverBgHiUndln = ({
    textColor,
    containerMl,
    outlineColor,
    differenceColor,
    underlineHeight,
    underlineColor,
    ...props
}) => (
    <BackgroundSpan
        {...props}
        sx={{
            // color: 'text',
            color: `${textColor}`,
            // cursor: 'pointer',
            display: [
                'inline-flex',
                'inline-flex',
                'inline-flex',
                'inline-flex',
                'inline-flex',
                'inline-flex',
            ],
            margin: '0px',
            mt: [4, 4, 0, 0, 0],
            mb: [4, 0, 0, 0, 0],
            ml: `${containerMl}`,
            // outlineColor: 'primary',
            outlineColor: `${outlineColor}`,
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
        <DecorationSpan
            {...props}
            sx={{
                // height: '2px',
                height: `${underlineHeight}`,
                // backgroundColor: 'primary',
                backgroundColor: `${underlineColor}`,
                bottom: '0px',
                display: 'block',
                // left: '0px',
                position: 'absolute',
                transformOrigin: 'left center',
                transition: 'transform 200ms ease-out 0s',
                // width: '100%',
                willChange: 'transform',
                zIndex: '1',
            }}
        />
    </BackgroundSpan>
)

HoverBgHiUndln.propTypes = {
    differenceColor: PropTypes.any,
    // hoverText: PropTypes.string,
    outlineColor: PropTypes.string,
    textColor: PropTypes.string,
    underlineColor: PropTypes.string,
    underlineHeight: PropTypes.string,
    containerMl: PropTypes.array,
}

HoverBgHiUndln.defaultProps = {
    // differenceColor: 'rgb(252,86,11)',
    differenceColor: 'bleed',
    // hoverText: '',
    outlineColor: 'primary',
    textColor: 'text',
    underlineColor: 'primary',
    underlineHeight: '1px',
    containerMl: [0, 2, 2, 2, 2, 2, 2, 2],
}

export default HoverBgHiUndln
