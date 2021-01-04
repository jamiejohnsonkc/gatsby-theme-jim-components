import React from 'react'
import Legal from './Legal'

export default {
    title: 'Components/Typography',
    component: Legal,
    argTypes: {
        variant: {
            name: 'size',
            control: {
                type: 'select',
                options: {
                    large: 'styles.u1',
                    medium: 'styles.u2',
                    small: 'styles.u3',
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
                    mono: 'mono',
                },
            },
        },
    },
}

export const LegalStory = (args) => <Legal {...args} />

LegalStory.storyName = 'Legal'
