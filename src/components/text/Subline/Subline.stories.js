import React from 'react'
import Subline from './Subline'

export default {
    title: 'Components/Typography/Subline',
    component: Subline,
    argTypes: {
        variant: {
            name: 'size',
            control: {
                type: 'select',
                options: {
                    h1: 'styles.h1',
                    h2: 'styles.h2',
                    h3: 'styles.h3',
                },
            },
        },
        fontWeight: {
            name: 'weight',
            control: {
                type: 'select',
                options: {
                    black: 'black',
                    heavy: 'heavy',
                    bold: 'bold',
                    regular: 'regular',
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

export const SublineStory = (args) => <Subline {...args}/>

SublineStory.storyName = 'Subline'
