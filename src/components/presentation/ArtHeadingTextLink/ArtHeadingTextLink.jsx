/** @jsx jsx */
import PropTypes from 'prop-types'
import React from 'react'
import { Box, Heading, jsx, Text } from 'theme-ui'
import AnchorLink from '../../primitives/AnchorLink'
import FpoImageWireFrame from '../../utilities/fpo/FpoImageWireFrame/FpoImageWireFrame'

// todo refactor
const ArtHeadingTextLink = ({
    artArt,
    artMb,
    boxBg,
    boxPx,
    boxPy,
    boxWidth,
    headingMb,
    headingHeading,
    headingVariant,
    boxClassName,
    headingClassName,
    headingAs,
    artClassName,
    textClassName,
    textMb,
    textText,
    textVariant,
    artHeight,
    artWidth,
    linkLink,
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
            <Heading
                classname={headingClassName}
                as={headingAs}
                {...props}
                sx={{
                    variant: `${headingVariant}`,
                    mb: `${headingMb}`,
                }}
            >
                {headingHeading}
            </Heading>
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
            {linkLink}
        </Box>
    </>
)

ArtHeadingTextLink.propTypes = {
    artArt: PropTypes.any,
    artClassName: PropTypes.any,
    artHeight: PropTypes.any,
    artMb: PropTypes.number,
    artWidth: PropTypes.any,
    boxBg: PropTypes.any,
    boxClassName: PropTypes.any,
    boxPx: PropTypes.number,
    boxPy: PropTypes.number,
    boxWidth: PropTypes.any,
    headingAs: PropTypes.any,
    headingClassName: PropTypes.any,
    headingHeading: PropTypes.string,
    headingMb: PropTypes.number,
    headingVariant: PropTypes.string,
    textClassName: PropTypes.any,
    textMb: PropTypes.number,
    textText: PropTypes.string,
    textVariant: PropTypes.string,
    linkLink: PropTypes.any,
}

ArtHeadingTextLink.defaultProps = {
    artArt: <FpoImageWireFrame />,
    artMb: 4,
    artHeight: '12em',
    boxPx: 4,
    boxPy: 4,
    boxWidth: '40em',
    headingMb: 4,
    headingVariant: 'styles.h3',
    textMb: 4,
    headingHeading: 'Loren sump dolor sit mate',
    textText:
        'Loren gypsum dolor sit met, sit bemuses complected, dolor em pertinacity dissenter est re. Pro ad prompts feud gait, quid exercise emeritus bis es.',
    textVariant: 'text.text_md',
    linkLink: <AnchorLink linkTo="/">Anchor Link</AnchorLink>,
}

export default ArtHeadingTextLink
