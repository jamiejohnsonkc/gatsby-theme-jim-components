/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import Ul from '../../Ul/Ul'
import Li from '../../Li/Li'

const UlMap = ({ list, ...props }) => (
	<Ul
		{...props}
		sx={{
			ulVariant: 'props.ulVariant',
		}}
	>
		{list.map((item) => (
			<Li liVariant={props.liVariant} key={item}>
				{item}
			</Li>
		))}
	</Ul>
)

UlMap.propTypes = {
	ulVariant: PropTypes.any,
	uliVariant: PropTypes.any,
}

UlMap.defaultProps = {
	ulVariant: 'styles.ulPlain',
	liVariant: 'styles.liPlain',
}

export default UlMap
