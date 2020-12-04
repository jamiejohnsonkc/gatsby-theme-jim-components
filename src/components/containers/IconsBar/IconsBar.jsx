/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

// TODO refactor for mapping

const IconbarWrapper = (props) => (
    <Box
        {...props}
        className="iconBarWrapper"
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '38%',
        }}
    />
)

const LinkBox = (props) => (
    <Box
        {...props}
        sx={{
            flex: '1 1 auto',
            width: '2em',
            height: '2em',
            transition: 'transform 0.35s ease-in-out',
            '&:hover': { transform: 'translateY(2px)' },
        }}
    />
)

const IconsBar = (props) => {
    // const context = useThemeUI()
    // const { theme } = context

    return (
        <IconbarWrapper style={{ iconBarWrapperStyle }}>
            <LinkBox>{props.icon1}</LinkBox>

            <LinkBox>{props.icon2}</LinkBox>

            <LinkBox>{props.icon3}</LinkBox>

            <LinkBox>{props.icon4}</LinkBox>
        </IconbarWrapper>
    )
}

IconsBar.propTypes = {}

IconsBar.defaultProps = {}

export default IconsBar
