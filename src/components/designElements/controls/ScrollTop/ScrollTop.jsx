/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import SysButton from '../../../system/atoms/SysButton'
import { GoChevronUp } from 'react-icons/go'

const ScrollTop = ({ bgColor, ...props }) => (
    <SysButton
        {...props}
        sx={{
            variant: 'buttons.scrollTop.fixed',
            bg: { bgColor },
            verticalAlign: 'sub',
        }}
    >
        <GoChevronUp />
    </SysButton>
)

ScrollTop.propTypes = {
    bgColor: PropTypes.string,
}

ScrollTop.defaultProps = {
    bgcolor: 'primary',
}

export default ScrollTop
