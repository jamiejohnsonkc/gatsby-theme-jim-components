/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import FpoImageWireFrame from '../../utilities/fpo/FpoImageWireFrame/FpoImageWireFrame'
import ExtLink from '../../primitives/ExtLink'
// import FpoStaticAstronaut from '../../../../utilities/fpo/FpoImages/FpoStaticAstronaut/FpoStaticAstronaut'

// TODO fix props to enable nested styles

const ArtTextLink = ({
    textAlign,
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
                textAlign,
                variant: `${textVariant}`,
                marginBottom: `${textMb}`,
            }}
        >
            {textText}
        </Text>
        {link}
    </Box>
)

ArtTextLink.propTypes = {
    blockWidth: PropTypes.string,
    extLinkText: PropTypes.string,
    extLinkTo: PropTypes.string,
    buttonVariant: PropTypes.string,
    compImage: PropTypes.any,
    imageHeight: PropTypes.string,
    imageMb: PropTypes.string,
    imageWidth: PropTypes.string,
    textMb: PropTypes.number,
    textText: PropTypes.string,
    textVariant: PropTypes.string,
}

ArtTextLink.defaultProps = {
    blockWidth: '40em',
    extLinkText: 'See More on LinkedIn',
    extLinkTo: '/',
    buttonVariant: 'buttons.lg',
    compImage: <FpoImageWireFrame />,
    imageHeight: '10em',
    imageMb: 4,
    imageWidth: '100%',
    textMb: 4,
    textText:
        'Text lg lorem ea aliqua adipisicing ex sunt culpa in. Nisi ut veniam pariatur ullamco sint magna eu id sint voluptate ullamco laboris.',
    textVariant: 'text.text_lg',
}

export default ArtTextLink
