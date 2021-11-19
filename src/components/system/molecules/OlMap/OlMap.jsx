/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import Ol from '../../Ol/Ol'
import Li from '../../Li/Li'

const OlMap = ({ list, ...props }) => (
	<Ol
		{...props}
		sx={{
			olVariant: 'props.olVariant',
		}}
	>
		{list.map((item) => (
			<Li liVariant={props.liVariant} key={item}>
				{item}
			</Li>
		))}
	</Ol>
)

OlMap.propTypes = {
	olVariant: PropTypes.any,
	oliVariant: PropTypes.any,
}

OlMap.defaultProps = {
	olVariant: 'styles.olPlain',
	liVariant: 'styles.liPlain',
}

export default OlMap
