/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const AnchorLink = ({ linkTo, className, variant, ...props }) => (
    <Link
        // {...props}
        to={linkTo}
        className={className}
        sx={{
            variant,
        }}
    >
        {props.children}
    </Link>
)

AnchorLink.propTypes = {
    children: PropTypes.string,
    className: PropTypes.any,
    linkTo: PropTypes.string,
    variant: PropTypes.any,
}

AnchorLink.defaultProps = {
    // linkTo: '/',
    // children: 'AnchorLink',
}

export default AnchorLink
