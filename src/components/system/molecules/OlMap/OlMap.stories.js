/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Ol from '../../atoms/Lists/Ol/Ol'
import Li from '../../atoms/Lists/Li/Li'
import PropTypes from 'prop-types'

export default {
	title: 'Lists/Composed/Ol',
}

export const OlMap = ({ list, ...props }) => {
	list = ['red', 'green', 'blue']

	return (
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
}

OlMap.propTypes = {
	olVariant: PropTypes.any,
	oliVariant: PropTypes.any,
}

OlMap.defaultProps = {
	olVariant: 'styles.olPlain',
	liVariant: 'styles.liPlain',
}
