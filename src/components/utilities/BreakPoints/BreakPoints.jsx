/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const BreakPoints = (props) => (
	<div
		{...props}
		sx={{
			width: '100%',
			position: 'absolute',
			top: '0',
			left: '0',
			zIndex: 2000,
		}}
	>
		<Box
			{...props}
			sx={{
				width: '40em',
				bg: 'red',
				height: '40px',
			}}
		>
			<Text
				{...props}
				sx={{
					fontSize: '24px',
					fontWeight: 'bold',
					color: '#fff',
				}}
			>
				40em
			</Text>
		</Box>
		<Box
			{...props}
			sx={{
				width: '52em',
				bg: 'green',
				height: '40px',
			}}
		>
			<Text
				{...props}
				sx={{
					fontSize: '24px',
					fontWeight: 'bold',
					color: '#fff',
				}}
			>
				52em
			</Text>
		</Box>
		<Box
			{...props}
			sx={{
				width: '60em',
				bg: 'blue',
				height: '40px',
			}}
		>
			<Text
				{...props}
				sx={{
					fontSize: '24px',
					fontWeight: 'bold',
					color: '#fff',
				}}
			>
				60em
			</Text>
		</Box>
		<Box
			{...props}
			sx={{
				width: '80em',
				bg: 'purple',
				height: '40px',
			}}
		>
			<Text
				{...props}
				sx={{
					fontSize: '24px',
					fontWeight: 'bold',
					color: '#fff',
				}}
			>
				80em
			</Text>
		</Box>
		<Box
			{...props}
			sx={{
				width: '100em',
				bg: 'orange',
				height: '40px',
			}}
		>
			<Text
				{...props}
				sx={{
					fontSize: '24px',
					fontWeight: 'bold',
					color: '#fff',
				}}
			>
				100em
			</Text>
		</Box>
	</div>
)

BreakPoints.propTypes = {}

BreakPoints.defaultProps = {}

export default BreakPoints
