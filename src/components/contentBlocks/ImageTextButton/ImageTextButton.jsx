/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import Button from '../../../../product/designElements/buttons/Button/Button'
import FpoImageWireFrame from '../../../../utilities/fpo/FpoImageWireFrame/FpoImageWireFrame'
// import FpoStaticAstronaut from '../../../../utilities/fpo/FpoImages/FpoStaticAstronaut/FpoStaticAstronaut'

const ImageTextButton = (props) => (
    <Box
        {...props}
        sx={{
            width: `${props.blockWidth}`,
        }}
        className="className"
    >
        <Box
            className="imageContainer"
            {...props}
            sx={{
                height: `${props.imageHeight}`,
                width: `${props.imageWidth}`,
                marginBottom: `${props.imageMb}`,
            }}
            children={props.compImage}
        />
        <Text
            {...props}
            className="blockText"
            sx={{
                variant: `${props.textVariant}`,
                variant: `${props.textMb}`,
            }}
            children={props.textText}
        />
        <Button
            {...props}
            sx={{
                variant: `${props.buttonVariant}`,
            }}
            to={props.buttonTo}
            children={props.buttonText}
        />
    </Box>
)

ImageTextButton.propTypes = {
    blockWidth: PropTypes.string,
    buttonText: PropTypes.string,
    buttonTo: PropTypes.string,
    buttonVariant: PropTypes.string,
    compImage: PropTypes.any,
    imageHeight: PropTypes.string,
    imageMb: PropTypes.string,
    imageWidth: PropTypes.string,
    textMb: PropTypes.number,
    textText: PropTypes.string,
    textVariant: PropTypes.string,
}

ImageTextButton.defaultProps = {
    blockWidth: '40em',
    buttonText: 'Button',
    buttonTo: '/',
    buttonVariant: 'buttons.lg',
    compImage: <FpoImageWireFrame />,
    imageHeight: '10em',
    imageMb: 4,
    imageWidth: '100%',
    textMb: 4,
    textText:
        'Text lg lorem ea aliqua adipisicing ex sunt culpa in. Nisi ut veniam pariatur ullamco sint magna eu id sint voluptate ullamco laboris.',
    textVariant: 'text.p1',
}

export default ImageTextButton
