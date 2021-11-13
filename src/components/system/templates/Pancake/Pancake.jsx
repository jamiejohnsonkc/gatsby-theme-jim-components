/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const Pancake = (props) => (
	<Pancake
		className='Pancake'
		{...props}
		sx={{
			variant: `${props.pancakePy}`,
		}}
	/>
)

Pancake.propTypes = {
	pancakePy: PropTypes.any,
}

Pancake.defaultProps = {
	pancakePy: 6,
}

export default Pancake
