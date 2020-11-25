/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import LogoIpsum from '../../../svg/assets/fpo/glyph-1.svg'

const OrgLogo = (props) => <>{props.orgLogo}</>

OrgLogo.propTypes = {
    orgLogo: PropTypes.any,
}

OrgLogo.defaultProps = {
    orgLogo: <LogoIpsum width="6em" />,
}

export default OrgLogo
