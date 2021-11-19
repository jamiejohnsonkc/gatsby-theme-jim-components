/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const SplitLine = (props) => [
	`${props.textLine1}`,
	<br />,
	`${props.textLine2}`,
]

const FullLine = (props) => (
	<span
		sx={{
			variant: `${props.fullLineVariant}`,
		}}
	>
		{props.children}
	</span>
)

const SplitTextLine = (props) => (
	<>
		<span
			{...props}
			sx={{
				variant: `${props.splitTextLineVariant}`,
			}}
		>
			<SplitLine {...props} />
		</span>
		<FullLine {...props}>
			{props.textLine1} {props.textLine2}
		</FullLine>
	</>
)

SplitTextLine.propTypes = {
	fullLineVariant: PropTypes.any,
	splitTextLineVariant: PropTypes.any,
	textLine1: PropTypes.any,
	textLine2: PropTypes.any,
}

SplitTextLine.defaultProps = {
	fullLineVariant: 'layout.fullLine',
	splitTextLineVariant: 'layout.splitTextLine',
	textLine1: 'Occaecat Lorem in laboris',
	textLine2: 'qui quis labore Commodo aliqua dolor qui reprehenderit',
}

export default SplitTextLine
