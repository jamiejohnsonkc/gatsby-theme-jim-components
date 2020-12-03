/** @jsx jsx */
import PropTypes from 'prop-types'
import { Box, Heading, jsx, Text } from 'theme-ui'
import FpoImageWireFrame from '../../utilities/fpo/FpoImageWireFrame/FpoImageWireFrame'

// todo refactor
const ArtHdngText = ({
    blockStyle,
    blockDisplay,
    blockWidth,
    visualHeight,
    visualWidth,
    visualMb,
    visual,
    headingVariant,
    headingAs,
    headingText,
    textVariant,
    textText,
    ...props
}) => (
    <Box
        {...props}
        style={blockStyle}
        sx={{
            width: `${blockWidth}`,
            display: `${blockDisplay}`,
        }}
        className="block"
    >
        <Box
            className="visual"
            {...props}
            sx={{
                height: `${visualHeight}`,
                width: `${visualWidth}`,
                marginBottom: `${visualMb}`,
            }}
        >
            {visual}
        </Box>

        <Heading
            {...props}
            className="heading"
            as={headingAs}
            sx={{
                variant: `${headingVariant}`,
                pr: 2,
            }}
        >
            {headingText}
        </Heading>
        <Text
            {...props}
            className="text"
            sx={{
                variant: `${textVariant}`,
            }}
        >
            {textText}
        </Text>
    </Box>
)

ArtHdngText.propTypes = {
    blockWidth: PropTypes.string,
    visual: PropTypes.any,
    headingText: PropTypes.string,
    headingVariant: PropTypes.string,
    textText: PropTypes.string,
    textVariant: PropTypes.string,
    visualHeight: PropTypes.string,
    visualMb: PropTypes.number,
    visualWidth: PropTypes.string,
    headingAs: PropTypes.string,
    blockDisplay: PropTypes.string,
    blockStyle: PropTypes.string,
}

ArtHdngText.defaultProps = {
    blockWidth: '100%',
    visual: <FpoImageWireFrame />,
    visualHeight: '10em',
    visualWidth: '3em',
    visualMb: 4,
    headingText: 'Romanesque foreordains xiv',
    headingVariant: 'h3',
    textText:
        'Loren sump dolor sit meat, it sumo, facet constitute re es. Est ponder um expedients cu, veil ex quid dictum momentum.',
    textVariant: 'text_lg',
    headingAs: 'h3',
    blockDisplay: 'flex',
    blockStyle: 'flex: `1 0 auto`',
}

export default ArtHdngText
