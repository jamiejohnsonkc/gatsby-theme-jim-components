/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'
import { ImArrowUpRight } from 'react-icons/im'
import AnchorLink from '../AnchorLink'

const CtaLinkInt = ({ linkTo, linkText, linkVisual, color, ...props }) => (
    <>
        <AnchorLink
            linkTo={linkTo}
            className="ctaLink"
            {...props}
            sx={{
                variant: 'links.ctaLink',
            }}
            // sx={{
            // 	display: 'inline-block',
            // }}
            // sx={{
            // width,
            // height,
            // bg,
            // padding,
            // margin,
            // color,
            // display: 'inline-flex',

            // }}
        >
            <Text
                {...props}
                className="linkText"
                sx={{
                    color,
                    display: 'inline-block',
                }}
            >
                {linkText}
            </Text>
            <Box
                {...props}
                className="linkVisual"
                sx={{
                    display: 'inline-block',
                }}
            >
                {linkVisual}
            </Box>
        </AnchorLink>
    </>
)

CtaLinkInt.propTypes = {
    className: PropTypes.any,
    iconColor: PropTypes.any,
    iconMarginLeft: PropTypes.any,
    linkVisual: PropTypes.any,
    linkText: PropTypes.any,
    linkTo: PropTypes.any,
}

CtaLinkInt.defaultProps = {
    // height: '',
    // margin: '',
    // padding: '',
    // width: '',
    // bg: 'transparent',
    // color: 'text',
    // linkTo: '/',
    // linkText: 'Link',
    linkVisual: <ImArrowUpRight />,
    // iconSize: '.5em',
    // iconColor: 'primary',
    // iconMarginLeft: 1,
    linkText: 'Link',
    linkTo: '/',
}

export default CtaLinkInt
