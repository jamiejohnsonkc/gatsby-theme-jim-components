/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import FpoImageWireFrame from '../../utilities/fpo/FpoImageWireFrame/FpoImageWireFrame'

const ArtText = ({
    boxPx,
    boxPy,
    boxBg,
    boxWidth,
    artHeight,
    artWidth,
    artMb,
    artArt,
    textVariant,
    textMb,
    textText,
    boxClassName,
    artClassName,
    textClassName,
    ...props
}) => (
    <Box
        {...props}
        classname={boxClassName}
        sx={{
            px: `${boxPx}`,
            py: `${boxPy}`,
            bg: `${boxBg}`,
            width: `${boxWidth}`,
        }}
    >
        <Box
            classname={artClassName}
            {...props}
            sx={{
                mb: `${artMb}`,
                height: `${artHeight}`,
                width: `${artWidth}`,
            }}
        >
            {artArt}
        </Box>
        <Text
            {...props}
            classname={textClassName}
            sx={{
                variant: `${textVariant}`,
                mb: `${textMb}`,
            }}
        >
            {textText}
        </Text>
    </Box>
)

ArtText.propTypes = {
    artArt: PropTypes.any,
    artClassName: PropTypes.any,
    artHeight: PropTypes.string,
    artMb: PropTypes.number,
    artWidth: PropTypes.string,
    boxBg: PropTypes.any,
    boxClassName: PropTypes.any,
    boxPx: PropTypes.any,
    boxPy: PropTypes.any,
    boxWidth: PropTypes.string,
    textClassName: PropTypes.any,
    textMb: PropTypes.number,
    textText: PropTypes.string,
    textVariant: PropTypes.string,
}

ArtText.defaultProps = {
    boxWidth: '40em',
    artArt: <FpoImageWireFrame />,
    artHeight: '12em',
    artMb: 4,
    artWidth: '100%',
    textMb: 4,
    textText:
        'Text lg lorem ea aliqua adipisicing ex sunt culpa in. Nisi ut veniam pariatur ullamco sint magna eu id sint voluptate ullamco laboris.',
    textVariant: 'text.text_lg',
}

export default ArtText
