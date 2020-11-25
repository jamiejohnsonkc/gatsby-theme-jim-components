/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const SplitLine = ({ textLine1, textLine2 }) => [
    `${textLine1}`,
    <br />,
    `${textLine2}`,
]

const FullLine = ({ fullLineVariant, fullLineText }) => (
    <span
        sx={{
            variant: `${fullLineVariant}`,
        }}
    >
        {fullLineText}
    </span>
)

const SplitTextLine = ({
    splitTextLineVariant,
    textLine1,
    textLine2,
    ...props
}) => (
    <>
        <span
            {...props}
            sx={{
                variant: `${splitTextLineVariant}`,
            }}
        >
            <SplitLine {...props} />
        </span>
        <FullLine {...props}>
            {textLine1} {textLine2}
        </FullLine>
    </>
)

SplitTextLine.propTypes = {
    fullLineVariant: PropTypes.string,
    splitTextLineVariant: PropTypes.string,
    textLine1: PropTypes.string,
    textLine2: PropTypes.string,
}

SplitTextLine.defaultProps = {
    fullLineVariant: 'layout.fullLine',
    splitTextLineVariant: 'layout.splitTextLine',
    textLine1: 'Occaecat Lorem in laboris',
    textLine2: 'qui quis labore Commodo aliqua dolor qui reprehenderit',
}

export default SplitTextLine
