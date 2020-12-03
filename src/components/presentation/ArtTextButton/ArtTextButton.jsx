/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../ui/buttons/Button'
import Glyph from '../../../svg/assets/fpo/glyph-1.svg'

const ArtTextButton = ({ icon, textText, buttonContent, ...props }) => (
    <>
        <Box>
            <Box>{icon}</Box>
            <Text>{textText}</Text>
            {buttonContent}
        </Box>
    </>
)

ArtTextButton.propTypes = {
    buttonContent: PropTypes.string,
    icon: PropTypes.any,
    textText: PropTypes.string,
}

ArtTextButton.defaultProps = {
    icon: <Glyph />,
    buttonContent: <Button />,
    textText:
        'Loren sump dolor sit mate, wist intelligent tied, acquit per sues rip ides emu in. Romanesque foreordains xiv, toll it parted mes no.',
}

export default ArtTextButton

// shift focus of the component from the content to the container - tripleStack, doubleStack, etc. use props to populate the content and layout styles (width, display, etc. - use storybook to create all the variables so you can do more with less components)
