/** @jsx jsx */
import { jsx } from 'theme-ui'
import Pill from './Pill'

export default {
	title: 'Design Elements/Buttons/Pill',
}

export const PillLarge = (props) => (
	<Pill
		{...props}
		sx={{
			variant: 'buttons.lg',
		}}
	>
		Button
	</Pill>
)
export const PillMedium = (props) => (
	<Pill
		{...props}
		sx={{
			variant: 'buttons.md',
		}}
	>
		Button
	</Pill>
)
export const PillSmall = (props) => (
	<Pill
		{...props}
		sx={{
			variant: 'buttons.sm',
		}}
	>
		Button
	</Pill>
)
