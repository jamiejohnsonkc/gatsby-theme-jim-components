/** @jsx jsx */
import { Box, Grid, jsx, Text } from 'theme-ui'
import React from 'react'
import Article from '../../../../../../../gatsby-theme-jim-components/src/components/containers/Article'
import SectionGrid from '../../../../../../../gatsby-theme-jim-components/src/components/containers/SectionGrid'
import Headline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'
import Subline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Subline'
import ProgBarGrpAccdn from '../../../../../../../gatsby-theme-jim-components/src/components/system/organisms/progBars/ProgBarGrpAccdn'
import ProgBarGrpMap from '../../../../../../../gatsby-theme-jim-components/src/components/system/organisms/progBars/ProgBarGrpMap'
import CtaLinkInt from '../../../../../../../gatsby-theme-jim-components/src/components/ui/CtaLinkInt'
import ScrollDownLineAnimatedVert from '../../../../../../../gatsby-theme-jim-components/src/components/ui/ScrollDownLineAnimatedVert'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'

// Document.getelementById()

const SectionGrid2Sub = ({ sectionBg, ...props }) => (
    <>
        <SectionGrid
            sectionBg={sectionBg}
            justifyContent="start"
            alignItems="center"
            className="sectionGrid"
            {...props}
            sx={{
                variant: 'layout.skillsSection',
            }}
        >
            <Article
                {...props}
                sx={{
                    variant: 'layout.skillsContainer',
                }}
            >
                <Grid
                    className="articleGrid"
                    columns={[
                        '1fr',
                        '1fr',
                        '1.75fr 1fr',
                        '1.3fr 1fr',
                        '1fr 1fr',
                        '1.25fr 1fr',
                    ]}
                    {...props}
                    sx={{
                        columnGap: 0,
                        maxWidth: [
                            '100%',
                            '100%',
                            '86em',
                            'container.5',
                            'container.5',
                            'container.5',
                        ],
                        height: [
                            null,
                            null,
                            '100vh',
                            '100vh',
                            '100vh',
                            '100vh',
                        ],
                    }}
                >
                    <Box
                        className="articleGridCell1"
                        {...props}
                        sx={{
                            pr: [0, 0, 5, 5, '111px', '111px'],
                            alignSelf: 'center',
                        }}
                        {...animation.slideUp1}
                    >
                        <Headline {...props} as="h1" variant="styles.hxxl">
                            My Skills & Capabilities
                        </Headline>

                        <Subline
                            {...props}
                            variant="styles.h4"
                            sx={{
                                mb: 2,
                                color: 'primary',
                            }}
                            // {...animation.slideUp2}
                        >
                            I'm fluent in code, design and strategy
                        </Subline>
                        <Text
                            {...props}
                            sx={{
                                variant: 'text.text_lg',
                            }}
                            // {...animation.slideUp3}
                        >
                            Consectetur sit irure mollit dolore Lorem aliqua
                            proident. Est fugiat aute anim exercitation.
                        </Text>
                        {/* <Text
							{...props}
							sx={{
								mb: [4, 4, 4, 4, 4],
								fontSize: [2, 3, 2, 2, 2],
								fontFamily: 'body',
								lineHeight: 2,
							}}
						>
							Here's what I bring to the table
						</Text> */}
                        {/* <Styled.h3
							{...props}
							sx={{
								// textTransform: 'uppercase',
								color: 'muted',
								// fontWeight: 'semibold',
								mb: 4,
							}}
						>
							Here's what I bring to the table
						</Styled.h3> */}

                        <ProgBarGrpAccdn />

                        <CtaLinkInt
                            {...props}
                            sx={{
                                mb: [0, 0, 0, 0, 4, 4],
                                display: 'block',
                                textAlign: 'left',
                                gridColumnStart: '1',
                                gridColumnEnd: '5',
                                '& .linkText': {
                                    fontSize: [1, 3, 3, 3, 2, 2],
                                    mr: 2,
                                    fontFamily: 'heading',
                                    color: 'primary',
                                    fontWeight: 'bold',
                                },
                                '& .linkVisual': {
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
                            linkTo="/"
                            linkText="Ready to Grow Your Business?"
                        />
                    </Box>

                    <Box
                        className="articleGridCell2"
                        {...props}
                        sx={{
                            display: [
                                'none',
                                'none',
                                'grid',
                                'grid',
                                'grid',
                                'grid',
                            ],
                            height: [
                                null,
                                null,
                                '100vh',
                                '100vh',
                                '100vh',
                                '100vh',
                            ],

                            overflowX: 'auto',
                            touchAction: 'pan-x',
                            cursor: 'grab',
                            overflowScrolling: 'touch',
                            scrollbarWidth: 'none',

                            '&::-webkit-scrollbar': {
                                display: [
                                    null,
                                    null,
                                    'none',
                                    'none',
                                    'none',
                                    'none',
                                ],
                            },
                        }}
                    >
                        <ProgBarGrpMap />
                    </Box>
                </Grid>
            </Article>
        </SectionGrid>
        <ScrollDownLineAnimatedVert />
        {/* </Section> */}
    </>
)

SectionGrid2Sub.propTypes = {}

SectionGrid2Sub.defaultProps = {}

export default SectionGrid2Sub