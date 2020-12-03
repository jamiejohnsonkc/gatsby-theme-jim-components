/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import FpoImageWireFrame from '../../utilities/fpo/FpoImageWireFrame/FpoImageWireFrame'

const ArtText = ({
    blockWidth,
    imageHeight,
    imageWidth,
    imageMb,
    compImage,
    textVariant,
    textMb,
    textText,
    ...props
}) => (
    <Box
        {...props}
        sx={{
            width: `${blockWidth}`,
        }}
        className="className"
    >
        <Box
            className="imageContainer"
            {...props}
            sx={{
                height: `${imageHeight}`,
                width: `${imageWidth}`,
                marginBottom: `${imageMb}`,
            }}
        >
            {compImage}
        </Box>
        <Text
            {...props}
            className="blockText"
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
    blockWidth: PropTypes.string,
    compImage: PropTypes.any,
    imageHeight: PropTypes.string,
    imageMb: PropTypes.number,
    imageWidth: PropTypes.string,
    textMb: PropTypes.number,
    textText: PropTypes.string,
    textVariant: PropTypes.string,
}

ArtText.defaultProps = {
    blockWidth: '40em',
    compImage: <FpoImageWireFrame />,
    imageHeight: '10em',
    imageMb: 4,
    imageWidth: '100%',
    textMb: 4,
    textText:
        'Text lg lorem ea aliqua adipisicing ex sunt culpa in. Nisi ut veniam pariatur ullamco sint magna eu id sint voluptate ullamco laboris.',
    textVariant: 'text.text_lg',
}

export default ArtText
