/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Ul from '../../Ul/Ul'
import Li from '../../Li/Li'
import PropTypes from 'prop-types'

export default {
	title: 'Lists/Composed/Ul',
}

export const UlMap = ({ list, ...props }) => {
	list = ['a', 'b', 'c']

	return (
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
}

UlMap.propTypes = {
	ulVariant: PropTypes.any,
	uliVariant: PropTypes.any,
}

UlMap.defaultProps = {
	ulVariant: 'styles.ulPlain',
	liVariant: 'styles.liPlain',
}
