/** @jsx jsx */
import { jsx } from 'theme-ui'
import Button from './Button'

export default {
	title: 'Design Elements/Buttons/Button',
}

export const Large = (props) => (
	<Button
		{...props}
		sx={{
			variant: 'buttons.lg',
		}}
	>
		Button
	</Button>
)
export const Medium = (props) => (
	<Button
		{...props}
		sx={{
			variant: 'buttons.md',
		}}
	>
		Button
	</Button>
)
export const Small = (props) => (
	<Button
		{...props}
		sx={{
			variant: 'buttons.sm',
		}}
	>
		Button
	</Button>
)
