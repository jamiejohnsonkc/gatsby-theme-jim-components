/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../ui/buttons/Button'
import Glyph from '../../../svg/assets/fpo/glyph-1.svg'

const ArtTextButton = ({
    artArt,
    artHeight,
    artMb,
    artWidth,
    boxBg,
    boxPx,
    boxPy,
    boxWidth,
    buttonButton,
    textMb,
    textText,
    textVariant,
    boxClassName,
    textClassName,
    artClassName,
    ...props
}) => (
    <>
        <Box
            classname={boxClassName}
            {...props}
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
                classname={textClassName}
                {...props}
                sx={{
                    variant: `${textVariant}`,
                    mb: `${textMb}`,
                }}
            >
                {textText}
            </Text>
            {buttonButton}
        </Box>
    </>
)

ArtTextButton.propTypes = {
    artArt: PropTypes.any,
    artClassName: PropTypes.any,
    artMb: PropTypes.number,
    artWidth: PropTypes.any,
    boxBg: PropTypes.any,
    boxClassName: PropTypes.any,
    boxPx: PropTypes.number,
    boxPy: PropTypes.number,
    boxWidth: PropTypes.any,
    buttonButton: PropTypes.any,
    textClassName: PropTypes.any,
    textMb: PropTypes.number,
    textText: PropTypes.string,
    textVariant: PropTypes.string,
}

ArtTextButton.defaultProps = {
    artArt: <Glyph style={{ width: '4em' }} />,
    artMb: 4,
    boxPx: 4,
    boxPy: 4,
    buttonButton: <Button variant="buttons.primaryMd" />,
    textMb: 4,
    textText:
        'Loren sump dolor sit mate, wist intelligent tied, acquit per sues rip ides emu in. Romanesque foreordains xiv, toll it parted mes no.',
    textVariant: 'text.text_md',
}

export default ArtTextButton

// shift focus of the component from the content to the container - tripleStack, doubleStack, etc. use props to populate the content and layout styles (width, display, etc. - use storybook to create all the variables so you can do more with less components)
