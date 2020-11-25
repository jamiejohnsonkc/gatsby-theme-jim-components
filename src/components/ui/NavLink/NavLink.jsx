/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import { Link } from 'gatsby'
import PropTypes from 'prop-types'

//TODO confirm compatibility/necessity against theme-ui's like component

const NavLink = (props) => (
    <Link
        {...props}
        activeClassName="active"
        className={props.className}
        to={props.navLinkTo}
        sx={{
            variant: `${props.navLinkVariant}`,
            navLinkBackground: `${props.navLinkBackground}`,
            color: `${props.navLinkColor}`,
            '&.active': {
                color: `${props.activeColor}`,
            },
        }}
    />
    // <a />
)

NavLink.propTypes = {
    activeColor: PropTypes.string,
    className: PropTypes.string,
    navLinkBackground: PropTypes.string,
    navLinkColor: PropTypes.string,
    navLinkTo: PropTypes.string,
    navLinkVariant: PropTypes.string,
}

NavLink.defaultProps = {
    activeColor: 'primary',
    className: '',
    navLinkBackground: 'transparent',
    navLinkVariant: 'links.navLink',
    navLinkTo: '/',
    navLinkColor: 'text',
}

export default NavLink
