/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import staticAstronaut from '../../../../../images/gatsby-astronaut.png'

const FpoAstronaut = (props) => (
	<Box
		{...props}
		sx={{
			width: `${props.width}`,
			height: `${props.height}`,
		}}
	>
		<>
			<img
				{...props}
				sx={{
					width: '100%',
				}}
				src={staticAstronaut}
			/>
		</>
	</Box>
)

FpoAstronaut.propTypes = {
	height: PropTypes.any,
	width: PropTypes.any,
}

FpoAstronaut.defaultProps = {
	height: '',
	width: '',
}

export default FpoAstronaut
