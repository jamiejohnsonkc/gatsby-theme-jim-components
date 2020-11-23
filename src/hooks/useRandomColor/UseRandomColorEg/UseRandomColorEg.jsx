/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import useRandomColor from '../useRandomColor'

const UseRandomColorEg = () => {
	const colors = ['red', 'blue', 'green', 'black']
	const [color, changeColor] = useRandomColor(colors, 'red')

	return (
		<Box
			style={{
				textAlign: 'center',
				padding: '20px 0',
				backgroundColor: color,
			}}
		>
			<h2 style={{ color: '#fff' }}>Click below button to change Color</h2>
			<br />
			<button onClick={changeColor}>Change</button>
		</Box>
	)
}

export default UseRandomColorEg
