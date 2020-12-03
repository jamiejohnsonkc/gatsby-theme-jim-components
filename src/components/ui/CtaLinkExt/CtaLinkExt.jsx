/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Text, Box, Link } from 'theme-ui'
import React from 'react'
import { ImArrowUpRight } from 'react-icons/im'

const CtaLinkExt = ({
    linkTo,
    linkText,
    linkArt,
    className,
    color,
    width,
    height,
    bg,
    padding,
    margin,
    ...props
}) => (
    <>
        <Link
            href={linkTo}
            className={className}
            {...props}
            sx={{
                width,
                height,
                bg,
                padding,
                margin,
                color,
                display: 'inline-block',
                variant: 'links.ctaLink',
            }}
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
        </Link>
    </>
)

CtaLinkExt.propTypes = {
    className: PropTypes.string,
    iconColor: PropTypes.string,
    iconMarginLeft: PropTypes.string,
    linkArt: PropTypes.any,
    linkText: PropTypes.string,
    linkTo: PropTypes.string,
}

CtaLinkExt.defaultProps = {
    linkArt: <ImArrowUpRight />,
    className: 'ctaLink',
    linkText: 'CtaLink',
    linkTo: '/',
}

export default CtaLinkExt
