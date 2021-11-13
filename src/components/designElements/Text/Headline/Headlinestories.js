import Headline from './Headline'


export default {
	title: 'Design Elements/Type/Headlines/Headline',
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
