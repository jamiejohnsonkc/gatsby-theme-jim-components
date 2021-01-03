import Paragraph from './Paragraph'

export default {
    title: 'Components/Typography',
    component: Paragraph,
    argTypes: {
        variant: {
            name: 'size',
            control: {
                type: 'select',
                options: {
                    large: 'styles.p1',
                    medium: 'styles.p2',
                    small: 'styles.p3',
                },
            },
        },
        fontWeight: {
            name: 'weight',
            control: {
                type: 'select',
                options: {
                    heavy: '600',
                    bold: '400',
                    regular: '300',
                    light: '200',
                },
            },
        },
        fontFamily: {
            control: {
                type: 'select',
                options: {
                    body: 'body',
                    heading: 'heading',
                    utility: 'utility',
                }
            }
        }
    },
}

export const ParaStory = (args) => <Paragraph {...args} />

ParaStory.storyName = 'Paragraph'
