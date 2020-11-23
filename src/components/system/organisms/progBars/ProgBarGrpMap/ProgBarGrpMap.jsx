/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import GroupGrid from '../GroupGrid/GroupGrid.jsx'
import GroupHead from '../GroupHead/GroupHead.jsx'
import ProgressBarGroup from '../ProgressBarGroup/ProgressBarGroup.jsx'
import Groups from '../../../../../../../devSite/src/data/skillProgress.json'
import LabeledProgressBar from '../../LabeledProgressBar/index.js'

const ProgBarGrpMap = ({
    groupGridColumns,
    groupSubGridColumns,
    groupHead,
    groupsSubhead,
    progressLabel,
    done,
    ...props
}) => {
    return (
        <Box
            className="gridWrapper"
            {...props}
            sx={{
                // bg: 'white',
                width: '100%',
                borderRadius: 6,
                py: [6, 6, 6, 5, 6, 6],
                // px: [1, 1, 4, 6, 6],
                pr: [0, 0, 0, 0, 4, 0],
                mt: [4, 4, 0, 0, 0, 0],
                display: ['none', 'none', 'block', 'block', 'block', 'block'],
            }}
        >
            <Box className="grid">
                {Groups.map((group, id) => (
                    <>
                        <GroupHead key={id} groupHead={group.groupHead} />
                        <GroupGrid groupGridColumns={group.groupGridColumns}>
                            {group.skillSets.map((skillSet, id) => (
                                <ProgressBarGroup
                                    key={id}
                                    groupSubhead={skillSet.groupSubhead}
                                    groupSubGridColumns={
                                        skillSet.groupSubGridColumns
                                    }
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
                    </>
                ))}
            </Box>
        </Box>
    )
}

ProgBarGrpMap.propTypes = {}

ProgBarGrpMap.defaultProps = {}

export default ProgBarGrpMap
