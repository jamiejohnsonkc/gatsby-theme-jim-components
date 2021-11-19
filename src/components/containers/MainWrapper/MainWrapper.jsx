/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const MainWrapper = ({ bg, px, py, p, ...props }) => (
    <Box
        {...props}
        sx={{
            bg,
            px,
            py,
            p,
            position: 'absolute',
            top: 0,
            left: 0,
            height: [null, null, '100%', '100%', '100%'],
            width: '100%',
        }}
        children={props.children}
        className="mainWrapper"
    />
)

export default MainWrapper
