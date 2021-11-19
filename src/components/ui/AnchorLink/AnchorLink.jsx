/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const AnchorLink = ({ linkTo, className, variant, ...props }) => (
    <Link
        // {...props}
        to={linkTo}
        children={props.children}
        className={className}
        sx={{
            variant,
        }}
    />
)

AnchorLink.propTypes = {
    className: PropTypes.any,
    children: PropTypes.any,
    linkTo: PropTypes.any,
}

AnchorLink.defaultProps = {}

export default AnchorLink
