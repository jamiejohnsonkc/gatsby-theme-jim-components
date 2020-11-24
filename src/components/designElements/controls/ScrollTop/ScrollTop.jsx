/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import SysButton from '../../../system/atoms/SysButton'
import { GoChevronUp } from 'react-icons/go'

const ScrollTop = ({
    bg,
    color,
    scrollTopVariant,
    scrollTopGlyph,
    ...props
}) => (
    <SysButton
        {...props}
        sx={{
            bg,
            color,
            variant: `${scrollTopVariant}`,
        }}
    >
        {scrollTopGlyph}
    </SysButton>
)

ScrollTop.propTypes = {
    bg: PropTypes.string,
    color: PropTypes.any,
    scrollTopGlyph: PropTypes.any,
    scrollTopVariant: PropTypes.string,
}

ScrollTop.defaultProps = {
    bg: 'primary',
    scrollTopVariant: 'buttons.scrollTop.fixed',
    scrollTopGlyph: <GoChevronUp />,
}

export default ScrollTop
