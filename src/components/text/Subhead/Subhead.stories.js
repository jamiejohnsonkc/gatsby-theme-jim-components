import React from 'react'
import Subhead from './Subhead'

export default {
    title: 'Components/Typography',
    component: Subhead,
    argTypes: {
        variant: {
            name: 'size',
            control: {
                type: 'select',
                options: {
                    h1: 'styles.h1',
                    h2: 'styles.h2',
                    h3: 'styles.h3',
                    h4: 'styles.h4',
                    h5: 'styles.h5',
                    h6: 'styles.h6',
                },
            },
        },
        fontWeight: {
            name: 'weight',
            control: {
                type: 'select',
                options: {
                    light: 'light',
                    regular: 'regular',
                    semibold: 'semibold',
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

export const SubheadStory = (args) => <Subhead {...args} />

SubheadStory.storyName = 'Subhead'
