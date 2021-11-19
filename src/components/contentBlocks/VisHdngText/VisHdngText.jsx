/** @jsx jsx */
import PropTypes from 'prop-types'
import { Box, jsx, Text } from 'theme-ui'
import Headline from '../../designElements/Text/Headline'
import Display from '../../designElements/Text/Display'
import FpoImageWireFrame from '../../utilities/fpo/FpoImageWireFrame/FpoImageWireFrame'

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
            width: ['83.3%', '83.3%', '90%', '90%', '90%', '90%', '90%', '90%'],
        }}
        className="className"
    >
        <Box
            className="visualContainer"
            {...props}
            sx={{
                height: '2.25em',
                width: `${visualWidth}`,
                marginBottom: [3, 4, 4, 5, 5, 5, 5, 5],
            }}
        >
            {compImage}
        </Box>

        <Headline
            {...props}
            sx={{
                variant: [
                    'styles.d5',
                    'styles.d4',
                    'styles.d4',
                    'styles.d5',
                    'styles.d5',
                    'styles.d5',
                    'styles.d4',
                    'styles.d2',
                ],
                mb: 4,
                // marginBottom: `${headingMb}`,
                // pr: 2,
                // fontWeight: `${headingWeight}`,
                // letterSpacing: `${headingSpacing}`,
            }}
        >
            {headingText}
        </Headline>
        <Display
            {...props}
            className="blockDisplay"
            sx={{
                variant: [
                    'styles.p2',
                    'styles.p2',
                    'styles.p2',
                    'styles.p2',
                    'styles.p2',
                    'styles.p2',
                    'styles.p2',
                    'styles.b2',
                ],
                lineHeight: 1.8,
            }}
        >
            {textText}
        </Display>
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
