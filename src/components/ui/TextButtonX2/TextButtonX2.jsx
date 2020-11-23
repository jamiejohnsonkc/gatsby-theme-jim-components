/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import Button from '../../../../product/designElements/buttons/Button/Button'

const TextButtonX2 = (props) => (
	<>
		<Text
			{...props}
			sx={{
				variant: `${props.textVariant}`,
				mb: 4,
			}}
		>
			{props.textText}
		</Text>
		<Button
			{...props}
			sx={{
				variant: `${props.buttonVariant}`,
				marginRight: 2,
			}}
			to={props.buttonTo}
		>
			{props.buttonText}
		</Button>
		<Button
			{...props}
			sx={{
				variant: `${props.button2Variant}`,
			}}
			to={props.button2To}
		>
			{props.button2Text}
		</Button>
	</>
)

TextButtonX2.propTypes = {
	button2Text: PropTypes.any,
	button2To: PropTypes.any,
	button2Variant: PropTypes.any,
	buttonText: PropTypes.any,
	buttonTo: PropTypes.any,
	buttonVariant: PropTypes.any,
	textText: PropTypes.any,
	textVariant: PropTypes.any,
}

TextButtonX2.defaultProps = {
	button2Text: 'Button2',
	button2To: '/',
	button2Variant: 'buttons.lg',
	buttonText: 'Button',
	buttonTo: '/',
	buttonVariant: 'buttons.lg',
	textText:
		'Text lg lorem ea aliqua adipisicing ex sunt culpa in. Nisi ut veniam pariatur ullamco sint magna eu id sint voluptate ullamco laboris. Ex nostrud tempor pariatur commodo exercitation enim duis nulla. Commodo aliqua dolor qui reprehenderit quis reprehenderit veniam voluptate nulla culpa nisi.',
	textVariant: 'text.text_lg',
}

export default TextButtonX2
