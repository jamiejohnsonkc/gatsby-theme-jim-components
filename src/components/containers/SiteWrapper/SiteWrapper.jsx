/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SiteWrapper = (props) => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Box
            className="siteWrapper"
            {...props}
            sx={{
                display: 'block',
                backgroundColor: `${props.siteWrapperBgColor}`,
                padding: `${props.siteWrapperPadding}`,
                position: 'relative',
                zIndex: '1',
            }}
        />
    )
}

SiteWrapper.propTypes = {
    siteWrapperBgColor: PropTypes.string,
    siteWrapperPadding: PropTypes.any,
}

SiteWrapper.defaultProps = {
    siteWrapperBgColor: 'background',
    siteWrapperPadding: 'none',
}

export default SiteWrapper
