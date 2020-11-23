/** @jsx jsx */
import PropTypes from 'prop-types'
import { Box, Heading, jsx, Text } from 'theme-ui'
import FpoImageWireFrame from '../../../../utilities/fpo/FpoImageWireFrame/FpoImageWireFrame'

// todo refactor
const VisHdngText = ({
    blockWidth,
    visualHeight,
    visualWidth,
    visualMb,
    compImage,
    headingVariant,
    headingMb,
    headingWeight,
    headingSpacing,
    headingText,
    textVariant,
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
            className="visualContainer"
            {...props}
            sx={{
                height: `${visualHeight}`,
                width: `${visualWidth}`,
                marginBottom: `${visualMb}`,
            }}
        >
            {compImage}
        </Box>

        <Heading
            {...props}
            sx={{
                variant: `${headingVariant}`,
                marginBottom: `${headingMb}`,
                pr: 2,
                fontWeight: `${headingWeight}`,
                letterSpacing: `${headingSpacing}`,
            }}
        >
            {headingText}
        </Heading>
        <Text
            {...props}
            className="blockText"
            sx={{
                variant: `${textVariant}`,
            }}
        >
            {textText}
        </Text>
    </Box>
)

VisHdngText.propTypes = {
    blockWidth: PropTypes.string,
    compImage: PropTypes.any,
    headingMb: PropTypes.number,
    headingSpacing: PropTypes.string,
    headingText: PropTypes.string,
    headingVariant: PropTypes.string,
    headingWeight: PropTypes.string,
    textMb: PropTypes.number,
    textText: PropTypes.string,
    textVariant: PropTypes.string,
    visualHeight: PropTypes.string,
    visualMb: PropTypes.number,
    visualWidth: PropTypes.string,
}

VisHdngText.defaultProps = {
    blockWidth: '100%',
    compImage: <FpoImageWireFrame />,
    visualHeight: '10em',
    visualMb: 4,
    visualWidth: '3em',
    headingText: 'Headling ullamco sint magna eu id sint',
    headingVariant: 'theme.subline',
    headingWeight: '400',
    headingMb: 4,
    textMb: 4,
    textText:
        'Text lg lorem ea aliqua adipisicing ex sunt culpa in. Nisi ut veniam pariatur ullamco sint magna eu id sint voluptate ullamco laboris.',
    textVariant: 'text.text_lg',
}

export default VisHdngText
