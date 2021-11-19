/** @jsx jsx */
import { jsx } from 'theme-ui'
import ButtonOutline from './ButtonOutline'

export default {
	title: 'Design Elements/Buttons/ButtonOutline',
}

export const ButtonOutlineLarge = (props) => (
	<ButtonOutline
		{...props}
		sx={{
			variant: 'buttons.lg',
		}}
	>
		Button
	</ButtonOutline>
)
export const ButtonOutlineMedium = (props) => (
	<ButtonOutline
		{...props}
		sx={{
			variant: 'buttons.md',
		}}
	>
		Button
	</ButtonOutline>
)
export const ButtonOutlineSmall = (props) => (
	<ButtonOutline
		{...props}
		sx={{
			variant: 'buttons.sm',
		}}
	>
		Button
	</ButtonOutline>
)
