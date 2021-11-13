/** @jsx jsx */
import { jsx } from 'theme-ui'

import React, { useState } from 'react'
import PropTypes from 'prop-types'

//see ColoredBanner for implementation

export const useRandomColor = (colors, initialColor) => {
	const lensColors = colors.length
	const [color, setColor] = useState(initialColor)

	const changeColor = () => {
		const index = Math.floor(Math.random() * lensColors)
		const pickedColor = colors[index]
		setColor(pickedColor)
	}

	return [color, changeColor]
}

export default useRandomColor
