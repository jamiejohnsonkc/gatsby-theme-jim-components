/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import useStyle from '../../../../../hooks/useStyle'

export const ProgressBar = ({
	done,
	level,
	progressBar,
	progressBarBg,
	progressBarShadow,
	...props
}) => {
	const [style, setStyle] = useState({})

	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`,
		}

		setStyle(newStyle)
	}, 200)

	return (
		<Box
			className='progressBarBg'
			{...props}
			sx={{
				backgroundColor: `${progressBarBg}`,
				borderRadius: '20px',
				position: 'relative',
				margin: '8px 0',
				height: '6px',
				opacity: 0.9,
				//
				width: '100%',
			}}
		>
			<Box
				className='progressBarBar'
				style={style}
				{...props}
				sx={{
					backgroundColor: `${progressBar}`,
					boxShadow: `${progressBarShadow}`,
					borderRadius: '20px',
					color: ['primary', null, 'transparent', null, null, null],
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100%',
					width: [null, null, '0', null, null, null],
					opacity: [null, null, '0', null, null, null],
					// transition: '1s ease 0.3s',
					transition: [
						null,
						null,
						null,
						'all 1s ease-in',
						'all 1s ease-in',
						'all 1s ease-in',
					],
					fontFamily: 'heading',
					fontSize: 0,
				}}
			>
				{level}
			</Box>
		</Box>
	)
}

ProgressBar.propTypes = {
	done: PropTypes.any,
	progressBar: PropTypes.any,
	progressBarBg: PropTypes.any,
	progressBarShadow: PropTypes.any,
	level: PropTypes.any,
}

ProgressBar.defaultProps = {
	// progressBarBg: 'linear-gradient(to left, #c5c5c5, #a7a7a7 )',
	progressBar: 'primaryLight',
	progressBarBg: 'overlay2',
	progressBarShadow: '0 3px 3px -5px #c5c5c5, 0 2px 5px #a7a7a7',
	// level: 'intermediate',
}

export default ProgressBar
