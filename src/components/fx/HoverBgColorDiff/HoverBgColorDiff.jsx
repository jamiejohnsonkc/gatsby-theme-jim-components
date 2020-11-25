/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

// TODO refactor out style to sep element & style for reuse

const HoverBgColorDiff = ({
    linkTo,
    height,
    width,
    color,
    bg,
    boxTransition,
    beforeAfterTransition,
    hoverBeforeAfterTransition,
    beforeBg,
    beforeMixBlendMode,
    inverseBgColor,
    ...props
}) => (
    <>
        <Box
            {...props}
            className="iconLinkLink"
            href={linkTo}
            sx={{
                height,
                width,
                color,
                bg,
                backfaceVisibility: 'hidden',
                overflow: 'hidden',
                position: 'relative',
                transition: `${boxTransition}`,
                zIndex: '1',
                background: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                '&::before, &::after': {
                    content: '""',
                    display: 'block',
                    height: '100%',
                    left: '0px',
                    position: 'absolute',
                    top: '0px',
                    transform: 'translateX(-110%)',
                    transformOrigin: 'left center',
                    transition: `${beforeAfterTransition}`,
                    width: '100%',
                    willChange: 'transform',
                    zIndex: '-1',
                },
                '&:hover::before, &:hover::after': {
                    transform: 'translateX(0px)',
                    transition: `${hoverBeforeAfterTransition}`,
                },
                '&::before': {
                    backgroundColor: `${beforeBg}`,
                    mixBlendMode: `${beforeMixBlendMode}`,
                    zIndex: '1',
                },
                '&::after': {
                    backgroundColor: `${inverseBgColor}`,
                },
            }}
        >
            {props.children}
        </Box>
    </>
)

HoverBgColorDiff.propTypes = {
    linkTo: PropTypes.string,
    color: PropTypes.string,
    boxTransition: PropTypes.string,
    beforeAfterTransition: PropTypes.string,
    hoverBeforeAfterTransition: PropTypes.string,
    beforeBg: PropTypes.string,
    beforeMixBlendMode: PropTypes.string,
    inverseBgColor: PropTypes.string,
}

HoverBgColorDiff.defaultProps = {
    linkTo: '/',
    color: 'primary',
    inverseBgColor: 'rgb(81,156,27)',
    boxTransition: 'color 200ms ease-in-out 0ms, transform 100ms ease-out 0s',
    beforeAfterTransition: 'transform 200ms ease-in 0s',
    beforeBg: 'background',
    hoverBeforeAfterTransition: 'transform 200ms ease-in-out 0ms',
    beforeMixBlendMode: 'difference',
}

export default HoverBgColorDiff
