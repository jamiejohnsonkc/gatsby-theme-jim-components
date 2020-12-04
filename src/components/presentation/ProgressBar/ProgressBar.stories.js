import React from 'react'
import ProgressBar from './ProgressBar'

export default {
    title: 'Presentation/ProgressBar',
    component: 'ProgressBar',
    argTypes: {
        done: {
            name: 'completion level',
            control: {
                type: 'range',
                options: {
                    min: 0,
                    max: 100,
                    step: 1,
                },
            },
        },
        progressBarBarColor: {
            control: 'color',
            name: 'bar Color',
        },

        progressBarBgColor: {
            control:  'color',
            name: 'background color',
        },

},
}

export const standard = (args) => <ProgressBar {...args} />
