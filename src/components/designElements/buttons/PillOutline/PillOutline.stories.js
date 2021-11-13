/** @jsx jsx */
import { jsx } from 'theme-ui'
import PillOutline from './PillOutline'

export default {
	title: 'Design Elements/Buttons/PillOutline',
}

export const PillOutlineLarge = (props) => (
	<PillOutline
		{...props}
		sx={{
			variant: 'buttons.lg',
		}}
	>
		Button
	</PillOutline>
)
export const PillOutlineMedium = (props) => (
	<PillOutline
		{...props}
		sx={{
			variant: 'buttons.md',
		}}
	>
		Button
	</PillOutline>
)
export const PillOutlineSmall = (props) => (
	<PillOutline
		{...props}
		sx={{
			variant: 'buttons.sm',
		}}
	>
		Button
	</PillOutline>
)
