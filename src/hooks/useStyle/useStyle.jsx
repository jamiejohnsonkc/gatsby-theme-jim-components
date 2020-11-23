/** @jsx jsx */
import { jsx } from 'theme-ui'

import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const useStyle = () => {
	const [style, setStyle] = useState({})

	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: (props) => `${props.done}%`,
		}

		setStyle(newStyle)
	}, 200)

	return [style, setStyle]
}

export default useStyle
