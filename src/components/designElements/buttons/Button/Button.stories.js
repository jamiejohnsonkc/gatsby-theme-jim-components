/** @jsx jsx */
import { jsx } from 'theme-ui'
import Button from './Button'

export default {
	title: 'Design Elements/Buttons/Button',
	component: Button,
	argTypes: {
		backgroundColor: {control: 'color'},
		buttonChild: {control: 'text'},
		buttonVariant: {control: 'text'},
	},
};

const Template = (args) => <Button {...args}/>;

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
