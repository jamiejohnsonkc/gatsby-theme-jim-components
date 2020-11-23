/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const Ul = (props) => (
	<ul
		{...props}
		sx={{
			variant: `${props.ulVariant}`,
		}}
		children={props.children}
	/>
)

Ul.propTypes = {}

Ul.defaultProps = {}

export default Ul
