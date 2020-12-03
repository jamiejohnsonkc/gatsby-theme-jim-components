/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'
import { ImArrowUpRight } from 'react-icons/im'
import AnchorLink from '../AnchorLink'

const CtaLinkInt = ({ linkTo, linkText, linkArt, color, ...props }) => (
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
                className="linkArt"
                sx={{
                    display: 'inline-block',
                }}
            >
                {linkArt}
            </Box>
        </AnchorLink>
    </>
)

CtaLinkInt.propTypes = {
    className: PropTypes.any,
    iconColor: PropTypes.any,
    iconMarginLeft: PropTypes.any,
    linkArt: PropTypes.any,
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
    linkArt: <ImArrowUpRight />,
    // iconSize: '.5em',
    // iconColor: 'primary',
    // iconMarginLeft: 1,
    linkText: 'Link',
    linkTo: '/',
}

export default CtaLinkInt
