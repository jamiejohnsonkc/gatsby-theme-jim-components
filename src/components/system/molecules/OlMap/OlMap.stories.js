/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Ol from '../../atoms/Ol'
import Li from '../../atoms/Li'
import PropTypes from 'prop-types'

export default {
	title: 'Containers/Ol map',
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
