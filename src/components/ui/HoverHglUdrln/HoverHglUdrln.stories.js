/** @jsx jsx */
import { jsx } from 'theme-ui'
import HoverHglUdrln from './HoverHglUdrln'

export default {
	title: 'Style/Hover Styles/Hover:Highlight & Underline',
	component: HoverHglUdrln,
	argTypes: {
		backgroundColor: {control: 'color'},
		backgroundHoverColor: {control: 'color'},
		color: {control: 'color'},
		fontSize: {control: 'fontSize'},
	},
};

const Template = ({args, underlineColor, underLineHeight, differenceColor, ...props}) => <HoverHglUdrln {...props} sx={{
fontSize: 5,
fontFamily: 'heading',
fontWeight: 'heavy',
underlineColor: 'primary',
underlineHeight: '2em',
differenceColor: 'rgb(252,86,11)',
// transition: 'transform 275ms ease',
// '&:before': {
// 	transition: 'transform 275ms ease',
// 	color: 'primary',
// },
}} {...args}/>;

export const Light = Template.bind({});
Light.args = {

	};

	export const Dark = Template.bind({});
	Dark.args = {

	};

