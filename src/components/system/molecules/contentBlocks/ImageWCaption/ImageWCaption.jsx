/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Box } from 'theme-ui'
import React from 'react'

import FpoImageWireFrame from '../../../../utilities/fpo/FpoImageWireFrame/FpoImageWireFrame'
import Caption from '../../../../designElements/Text/Caption'

const ImageWCaption = ({
    blockWidth,
    imageHeight,
    imageWidth,
    imageMb,
    compImage,
    captionPadding,
    captionText,
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

        <Caption
            sx={{
                padding: `${captionPadding}`,
                variant: 'text.caption',
            }}
        >
            {captionText}
        </Caption>
    </Box>
)

export default ImageWCaption

ImageWCaption.propTypes = {
    blockWidth: PropTypes.any,
    captionPadding: PropTypes.any,
    captionText: PropTypes.string,
    compImage: PropTypes.any,
    imageHeight: PropTypes.string,
    imageMb: PropTypes.string,
    imageWidth: PropTypes.string,
}

ImageWCaption.defaultProps = {
    blockWidth: '40em',
    captionPadding: 2,
    captionText:
        'Caption Tempor magna reprehenderit voluptate elit sit laborum est proident proident sit commodo exercitation',
    compImage: <FpoImageWireFrame />,
    imageHeight: '10em',
    imageMb: 2,
    imageWidth: '100%',
}
