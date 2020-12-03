/** @jsx jsx */
import { jsx } from 'theme-ui'
import HoverTextFill from './HoverTextFill'

export default {
	title: 'Style/Hover Styles/Hover:Text-Fill',
	component: HoverTextFill,
	argTypes: {
		backgroundColor: {control: 'color'},
		backgroundHoverColor: {control: 'color'},
		color: {control: 'color'},
		fontSize: {control: 'fontSize'},

	},
};

const Template = ({args, ...props}) => <HoverTextFill {...props} sx={{
fontSize: 5,
fontFamily: 'heading',
fontWeight: 'heavy',
color: 'text',
transition: 'transform 275ms ease',
'&:before': {
	transition: 'transform 275ms ease',
	color: 'primary',
},
}} {...args}/>;

export const Light = Template.bind({});
Light.args = {

	};

	export const Dark = Template.bind({});
	Dark.args = {

	};

