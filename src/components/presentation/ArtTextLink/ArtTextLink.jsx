/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import FpoImageWireFrame from '../../utilities/fpo/FpoImageWireFrame/FpoImageWireFrame'
import AnchorLink from '../../primitives/AnchorLink'

// TODO fix props to enable nested styles

const ArtTextLink = ({
    boxWidth,
    textAlign,
    artHeight,
    artWidth,
    boxPx,
    boxPy,
    boxBg,
    artMb,
    artArt,
    textVariant,
    textMb,
    textText,
    linkLink,
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
                textAlign,
                marginBottom: `${textMb}`,
            }}
        >
            {textText}
        </Text>
        {linkLink}
    </Box>
)

ArtTextLink.propTypes = {
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
    buttonVariant: PropTypes.string,
    linkLink: PropTypes.any,
    textAlign: PropTypes.any,
    textClassName: PropTypes.any,
    textMb: PropTypes.number,
    textText: PropTypes.string,
    textVariant: PropTypes.string,
}

ArtTextLink.defaultProps = {
    boxWidth: '40em',
    buttonVariant: 'buttons.lg',
    artArt: <FpoImageWireFrame />,
    artHeight: '12em',
    artMb: 4,
    artWidth: '100%',
    textMb: 4,
    textText:
        'Text lg lorem ea aliqua adipisicing ex sunt culpa in. Nisi ut veniam pariatur ullamco sint magna eu id sint voluptate ullamco laboris.',
    textVariant: 'text.text_lg',
    linkLink: <AnchorLink />,
}

export default ArtTextLink
