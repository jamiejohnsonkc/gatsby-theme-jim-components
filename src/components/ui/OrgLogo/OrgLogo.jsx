/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

// import colors from '../../../../../../gatsby-theme-jim-theme-ui/src/gatsby-plugin-theme-ui/colors'
import PropTypes from 'prop-types'
import LogoIpsum from '../../../../svg/assets/fpo/logo-1.svg'

const OrgLogo = ({ orgLogo, ...props }) => <>{orgLogo}</>

OrgLogo.propTypes = {
    orgLogo: PropTypes.any,
}

OrgLogo.defaultProps = {
    orgLogo: <LogoIpsum fill="primary" width="6em" />,
}

export default OrgLogo
