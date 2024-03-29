/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card, jsx } from 'theme-ui'
import ArtHeadingTextLink from '../../presentation/ArtHeadingTextLink'
import CtaLinkInt from '../../ui/CtaLinkInt'
import FpoImageWireFrame from '../../utilities/fpo/FpoImageWireFrame'

// TODO refactor style

const ServiceCard = ({
    linkText,
    linkTo,
    linkArt,
    compImage,
    visualWidth,
    headingText,
    textText,
    ...props
}) => (
    <>
        <Box className="serviceCardWrapper" marginRight={3}>
            <Card
                className="serviceCard"
                {...props}
                sx={{
                    variant: 'layout.serviceSliderCard',
                    boxShadow: 'subtleFirmLR',
                    flex: '1 0 100%',
                    minHeight: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'flex-end',
                }}
            >
                <Box
                    {...props}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'flex-end',
                        justifyContent: 'start',
                        width: '100%',
                        minWidth: '10em',
                        height: '80%',
                        '& > div': {
                            flex: '1 1 100%',
                            height: '22em',
                            minWidth: '100%',
                        },
                    }}
                >
                    <ArtHeadingTextLink
                        blockWidth="100%"
                        compImage={compImage}
                        visualHeight="2.25em"
                        visualMb={4}
                        visualWidth={visualWidth}
                        headingText={headingText}
                        headingVariant="styles.h3"
                        headingSpacing="tight"
                        headingWeight="heavy"
                        headingMb={3}
                        textMb={4}
                        textText={textText}
                        textVariant="text.text_lg"
                        {...props}
                        sx={{
                            lineHeight: 1.25,
                        }}
                    />

                    <CtaLinkInt
                        linkText={linkText}
                        linkArt={linkArt}
                        linkTo={linkTo}
                        {...props}
                        sx={{
                            // flex: '1',
                            // minWidth: '8em',
                            // alignSelf: 'flex-start',

                            // mb: [3, null, null, null, null],
                            textAlign: 'left',
                            '& .linkText': {
                                fontSize: [1, 3, 3, 3, 2, 2],
                                fontFamily: 'heading',
                                fontWeight: 'regular',
                                color: 'primary',
                                mr: 2,
                                flex: '1',
                            },
                            '& .linkArt': {
                                '& > svg': {
                                    height: [
                                        '.5em',
                                        '.75em',
                                        '.5em',
                                        '.5em',
                                        '.5em',
                                        '.5em',
                                    ],
                                    width: [
                                        '.5em',
                                        '.75em',
                                        '.5em',
                                        '.5em',
                                        '.5em',
                                        '.5em',
                                    ],
                                    fill: 'primary',
                                },
                            },
                        }}
                    />
                </Box>
            </Card>
        </Box>
    </>
)

ServiceCard.propTypes = {
    compImage: PropTypes.any,
    headingText: PropTypes.string,
    iconName: PropTypes.string,
    imageWidth: PropTypes.string,
    linkText: PropTypes.string,
    linkTo: PropTypes.any,
    linkArt: PropTypes.any,
    textText: PropTypes.string,
    visualWidth: PropTypes.any,
}

ServiceCard.defaultProps = {
    compImage: <FpoImageWireFrame />,
    headingText: 'Heading text sint mangna eu',
    iconName: 'SolidNorthEastArrow',
    imageWidth: '10em',
    linkText: 'Link',
    textText:
        'Text lg lorem ea aliqua adipisicing ex sunt culpa in. Nisi ut veniam pariatur ullamco sint magna eu id sint voluptate ullamco laboris.',
}

export default ServiceCard
