/** @jsx jsx */
import { jsx } from 'theme-ui'
import ButtonOutline from './ButtonOutline'


export default {
	title: 'Design Elements/Buttons/ButtonOutline',
	component: ButtonOutline,
	argTypes: {
		backgroundColor: {control: 'color'},
		buttonChild: {control: 'text'},
		buttonVariant: {control: 'text'},
	},
};

const Template = (args) => <ButtonOutline {...args}/>;

export const Large = Template.bind({});
	Large.args = {
		buttonVariant: 'buttons.lg'
	};

	export const Medium = Template.bind({});
	Medium.args = {
		buttonVariant: 'buttons.md'
	};
	export const Small = Template.bind({});
	Small.args = {
		buttonVariant: 'buttons.sm'
	};

