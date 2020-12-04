/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import useStyle from '../../../../../hooks/useStyle'

//TODO relax on the props yo

const ProgressBar = ({
    done,
    level,
    progressBarBorderRadius,
    progressBarBgColor,
    progressBarMargin,
    progressBarHeight,
    progressBarBgOpacity,
    progressBarBarColor,
    progressBarShadow,
    progressBarOverlayTextColor,
    progressBarWidth,
    progressBarOpacity,
    progressBarTransition,
    progressBarOverlayFontFamily,
    progressBarOverlayFontSize,
    progressBarBarHeight,
    ...props
}) => {
    const [style, setStyle] = useState({})

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`,
        }

        setStyle(newStyle)
    }, 200)

    return (
        <Box
            className="progressBarBg"
            {...props}
            sx={{
                position: 'relative',
                width: '100%',
                borderRadius: `${progressBarBorderRadius}`,
                backgroundColor: `${progressBarBgColor}`,
                margin: `${progressBarMargin}`,
                height: `${progressBarHeight}`,
                opacity: `${progressBarBgOpacity}`,
            }}
        >
            <Box
                className="progressBarBar"
                style={style}
                {...props}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: `${progressBarBarHeight}`,
                    borderRadius: `${progressBarBorderRadius}`,
                    backgroundColor: `${progressBarBarColor}`,
                    boxShadow: `${progressBarShadow}`,
                    color: `${progressBarOverlayTextColor}`,
                    width: `${progressBarWidth}`,
                    opacity: `${progressBarOpacity}`,
                    transition: `${progressBarTransition}`,
                    fontFamily: `${progressBarOverlayFontFamily}`,
                    fontSize: `${progressBarOverlayFontSize}`,
                }}
            >
                {level}
            </Box>
        </Box>
    )
}

ProgressBar.propTypes = {
    done: PropTypes.number,
    level: PropTypes.string,
    progressBarBarColor: PropTypes.string,
    progressBarBgColor: PropTypes.string,
    progressBarBgOpacity: PropTypes.any,
    progressBarHeight: PropTypes.string,
    progressBarMargin: PropTypes.string,
    progressBarOpacity: PropTypes.any,
    progressBarBorderRadius: PropTypes.any,
    progressBarOverlayFontFamily: PropTypes.string,
    progressBarOverlayFontSize: PropTypes.string,
    progressBarOverlayTextColor: PropTypes.string,
    progressBarShadow: PropTypes.string,
    progressBarTransition: PropTypes.string,
    progressBarWidth: PropTypes.string,
    progressBarBarHeight: PropTypes.string,
}

ProgressBar.defaultProps = {
    progressBarBgColor: 'overlay2',
    progressBarBorderRadius: '10px',
    progressBarMargin: '8px 0',
    progressBarHeight: '6px',
    progressBarBarHeight: '6px',
    progressBarBgOpacity: 0.9,
    progressBarBarColor: 'primary',
    progressBarShadow: '0 3px 3px -5px #c5c5c5, 0 2px 5px #a7a7a7',
    progressBarOverlayTextColor: 'text',
    progressBarWidth: '80%',
    progressBarTransition: 'all 1s ease 0.3s',
    progressBarOverlayFontFamily: 'heading',
    progressBarOverlayFontSize: '0',
}

export default ProgressBar
