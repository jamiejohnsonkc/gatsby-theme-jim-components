/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
// import colors from '../../../../../../gatsby-theme-jim-theme-ui/src/gatsby-plugin-theme-ui/colors'

import PropTypes from 'prop-types'
import GlyphIpsum from '../../../svg/assets/fpo/glyph-1.svg'

const OrgGlyph = (props) => <>{props.orgGlyph} </>

OrgGlyph.propTypes = {
    orgGlyph: PropTypes.any,
}

OrgGlyph.defaultProps = {
    orgGlyph: <GlyphIpsum width="4em" />,
}

export default OrgGlyph
