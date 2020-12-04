import Paragraph from './Paragraph'

export default {
    title: 'Typography/Paragraph',
    component: Paragraph,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: {
									large: 'text.p_lq',
									medium: 'text.p_md',
									small: 'text.p_sm',
								},
            },
        },
    },
}

export const Standard = (args) => <Paragraph {...args} />


