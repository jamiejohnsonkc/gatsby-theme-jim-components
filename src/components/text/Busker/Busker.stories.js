import React from 'react'
import Busker from './Busker'

export default {
    title: 'Components/Typography/Busker',
    component: Busker,
    argTypes: {
        variant: {
            name: 'size',
            control: {
                type: 'select',
                options: {
                    bu1: 'styles.bu1',
                    bu2: 'styles.bu2',
                    bu3: 'styles.bu3',
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

export const BuskerStory = (args) => <Busker {...args} />

BuskerStory.storyName = 'Busker'
