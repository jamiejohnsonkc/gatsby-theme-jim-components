/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import FpoImageWireFrame from '../../utilities/fpo/FpoImageWireFrame'

const BackgroundSvg = ({ backgroundSvg, ...props }) => (
    <Box
        {...props}
        sx={{
            position: 'absolute',
            zIndex: '-1',
            height: '100vh',
            width: '100%',
            top: 0,
            left: 0,
        }}
    >
        {backgroundSvg}
    </Box>
)

BackgroundSvg.propTypes = {
    backgroundSvg: PropTypes.any,
}

BackgroundSvg.defaultProps = {
    backgroundSvg: <FpoImageWireFrame />,
}

export default BackgroundSvg
