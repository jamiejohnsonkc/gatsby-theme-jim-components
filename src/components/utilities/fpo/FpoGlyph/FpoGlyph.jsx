/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import GlyphIpsum from '../../../../svg/assets/fpo/glyph-1.svg'

const FpoGlyph = (props) => (
    <>
        <GlyphIpsum
            {...props}
            sx={{
                fill: `${props.glyphFill}`,
                width: `${props.glyphWidth}`,
            }}
        />
    </>
)

FpoGlyph.propTypes = {
    glyphFill: PropTypes.any,
    glyphWidth: PropTypes.any,
}

FpoGlyph.defaultProps = {
    glyphFill: 'primary',
    glyphWidth: '100%',
}

export default FpoGlyph
