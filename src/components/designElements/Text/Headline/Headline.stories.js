import Headline from './Headline'


export default {
title: 'Typography/Headline',
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
