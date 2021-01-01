import Headline from './Headline'


export default {
	title: 'Components/Typography/Headline',
}

export const standard = (props) => (
	<Headline
		{...props}
		sx={{
			variant: 'styles.h1',
		}}
	>
		Headline h1
	</Headline>
)
