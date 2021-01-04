import React from 'react'
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
                    heavy: 'heavy',
                    bold: 'bold',
                    regular: 'regular',
                    light: 'light',
                },
            },
        },
        fontFamily: {
            control: {
                type: 'select',
                options: {
                    body: 'body',
                    heading: 'heading',
                    mono: 'mono',
                }
            }
        }
    },
}

export const ParaStory = (args) => <Paragraph {...args} />

ParaStory.storyName = 'Paragraph'
