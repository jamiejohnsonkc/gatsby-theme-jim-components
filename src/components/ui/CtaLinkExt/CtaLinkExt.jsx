/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Text, Box, Link } from 'theme-ui'
import React from 'react'
import { ImArrowUpRight } from 'react-icons/im'

const CtaLinkExt = ({
    linkTo,
    linkText,
    linkVisual,
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
                className="linkVisual"
                sx={{
                    display: 'inline-block',
                }}
            >
                {linkVisual}
            </Box>
        </Link>
    </>
)

CtaLinkExt.propTypes = {
    className: PropTypes.string,
    iconColor: PropTypes.string,
    iconMarginLeft: PropTypes.string,
    linkVisual: PropTypes.any,
    linkText: PropTypes.string,
    linkTo: PropTypes.string,
}

CtaLinkExt.defaultProps = {
    linkVisual: <ImArrowUpRight />,
    className: 'ctaLink',
    linkText: 'CtaLink',
    linkTo: '/',
}

export default CtaLinkExt
