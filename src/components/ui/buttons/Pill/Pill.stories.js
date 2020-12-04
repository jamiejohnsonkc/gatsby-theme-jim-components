/** @jsx jsx */
import { jsx } from 'theme-ui'
import Pill from './Pill'


export default {
	title: 'Ui/Buttons/Pill',
	component: Pill,
	argTypes: {
		backgroundColor: {control: 'color'},
		buttonChild: {control: 'text'},
		buttonVariant: {control: 'text'},
	},
};

const Template = (args) => <Pill {...args}/>;

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

