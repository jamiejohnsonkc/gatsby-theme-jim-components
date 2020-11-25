/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { GoChevronDown } from 'react-icons/go'
import GroupGrid from '../../system/organisms/progBars/GroupGrid'
import GroupHead from '../../system/organisms/progBars/GroupHead'
import ProgressBarGroup from '../../system/organisms/progBars/ProgressBarGroup'
import LabeledProgressBar from '../../system/organisms/LabeledProgressBar'
import Data from '../../system/organisms/progBars/sampleData'
import Span from '../../system/atoms/Span/Span'

// TODO Refactor styles & components as skeleton accordion container

const Accordion = (props) => {
    return (
        <Box
            className="accordionContainer"
            {...props}
            sx={{
                width: '100%',
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(57, 120, 239, 0.16)',
                gridTemplateColumns: '1fr',
            }}
        >
            <Box
                className="wrapper"
                {...props}
                sx={{
                    width: '100%',
                    px: [0, 4, 0, 0, 0],
                }}
            >
                <ul
                    className="accordion-list"
                    {...props}
                    sx={{
                        width: '100%',
                        listStyle: 'none',
                        margin: '0',
                        padding: '0',
                        backgroundColor: '#fff',
                        /* max-width: 30rem; */
                        borderRadius: '0.4rem',
                        overflow: 'hidden',
                        boxShadow: `0 0 0.8rem 0.1rem rgba(15, 72, 179, 0.06), 0 20px 30px -10px rgba(15, 72, 179, 0.2)`,
                    }}
                >
                    {Data.map((group, id) => {
                        return (
                            <Box
                                className="accordionListItem"
                                key={id}
                                {...props}
                                sx={{
                                    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                                    '& + accordionListItem': {
                                        borderTop:
                                            '1px solid rgba(0, 0, 0, 0.1)',
                                    },
                                }}
                            >
                                <AccordionItem group={group} groupId={id} />
                            </Box>
                        )
                    })}
                </ul>
            </Box>
        </Box>
    )
}

const AccordionItem = ({
    group,
    groupId,
    groupGridColumns,
    groupSubGridColumns,
    groupHead,
    groupsSubhead,
    progressLabel,
    ...props
}) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <Box
            className={`accordion-item ${
                isOpen ? 'accordion-item--opened' : ''
            }`}
            onClick={() => setOpen(!isOpen)}
        >
            {/* <h3 {...{ className: 'accordion-item__title' }}>{title}</h3> */}
            <Box
                className="accordion-item__line"
                {...props}
                sx={{
                    // transition: 'all .2s ease-in-out .2s',

                    display: 'grid',
                    gridTemplateColumns: '11fr 1fr',
                    justifyContent: 'spaceBetween',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    zIndex: '2',
                    position: 'relative',
                    // py: `${isOpen ? 4 : 4}`,
                    py: 4,
                    px: [4, 4, 4, 4, 4],
                    // py: `${isOpen ? 4 : ''}`,
                    mb: `${isOpen ? 4 : 0}`,
                    backgroundColor: `${isOpen ? 'muted' : ''}`,
                    boxShadow: `${isOpen ? 'uiDivide' : ''}`,
                    color: `${isOpen ? 'revText' : 'text'}`,
                    transition: 'all .2s ease-in-out .2s',
                    willChange:
                        'color, boxShadow, p, marginBottom, backgroundColor',
                }}
            >
                <GroupHead key={groupId} groupHead={group.groupHead} />

                <Span
                    className="accordion-item__icon"
                    {...props}
                    sx={{
                        display: 'grid',
                        justifyContent: 'center',
                        alignItems: 'center',
                        transition: 'transform 0.3s ease-in-out',
                        width: '1.25em',
                        height: '1.25em',
                        transform: `${isOpen ? 'rotate(180deg)' : ''}`,
                        '& > svg': {
                            stroke: `${isOpen ? 'muted' : 'revText'}`,
                            opacity: '0.6',
                        },
                    }}
                >
                    <GoChevronDown />
                </Span>
            </Box>
            <Box
                className="accordion-item__inner"
                {...props}
                sx={{
                    px: [4, 4, 4, 4, 4],
                    maxHeight: `${isOpen ? '200em' : '0'}`,
                    overflow: 'hidden',
                    textTransform: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
                    transitionDuration: '0.5s',
                    transitionProperty: 'max-height',
                    zIndex: '1',
                    position: 'relative',
                    transitionTimingFunction: `${
                        isOpen ? 'cubic-bezier(0.895, 0.03, 0.685, 0.22)' : ''
                    }`,
                    transitionDuration: `${isOpen ? '0.5s' : ''}`,
                    transitionProperty: `${isOpen ? 'max-height' : ''}`,
                }}
            >
                <Box
                    className="accordion-item__content"
                    {...props}
                    sx={{
                        // transform: 'translateY(-2em)',
                        opacity: `${isOpen ? '1' : '0'}`,
                        transform: `${
                            isOpen ? 'translateY(0)' : 'translateY(-2em)'
                        }`,
                        transitionDelay: `${isOpen ? '0.2s' : '0.5s'}`,
                        transitionTimingFunction: `${
                            isOpen ? 'ease-in-out' : ''
                        }`,
                        transitionDuration: `${isOpen ? '0.2s' : '0.1s'}`,
                        transitionProperty: `${
                            isOpen ? 'opacity, transform' : ''
                        }`,
                    }}
                >
                    <GroupGrid groupGridColumns={group.groupGridColumns}>
                        {group.skillSets.map((skillSet, id) => (
                            <ProgressBarGroup
                                key={id}
                                groupSubhead={skillSet.groupSubhead}
                                groupSubGridColumns={
                                    skillSet.groupSubGridColumns
                                }
                                subGridPaddingRight={[2, 2, 0, 0, 0]}
                            >
                                {skillSet.bars.map((bar, id) => (
                                    <LabeledProgressBar
                                        key={id}
                                        progressLabel={bar.label}
                                        done={bar.done}
                                    />
                                ))}
                            </ProgressBarGroup>
                        ))}
                    </GroupGrid>
                </Box>
            </Box>
        </Box>
    )
}

Accordion.propTypes = {}

Accordion.defaultProps = {}

export default Accordion
