import FpoImageWireFrame from '../../utilities/fpo/FpoImageWireFrame'
import Caption from './Caption'

export default {
	title: 'Components/Typography/Caption',
	component: Caption,
	decorators:  [(Story) =>


			<div style={{height: '14em', maxWidth: '38em',background: '#e6e6e6'}}><FpoImageWireFrame/>
		<Story/></div>
	],
}

export const standard = () => <Caption />
