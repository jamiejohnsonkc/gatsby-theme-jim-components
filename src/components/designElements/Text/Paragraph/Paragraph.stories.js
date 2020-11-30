import Paragraph from './Paragraph'

export default {
	title: 'Typography/Paragraph',
	component: Paragraph,
	argTypes: {
		variant: {control: 'text'},
	},
};

const Template = (args) => <Paragraph {...args}/>;

export const Large = Template.bind({});
	Large.args = {
		variant: 'text.p_lg'
	};

	export const Medium = Template.bind({});
	Medium.args = {
		variant: 'text.p_md'
	};
	export const Small = Template.bind({});
	Small.args = {
		variant: 'text.p_sm'
	};

