import React from 'react'
import ProgressBar from './ProgressBar'

export default {
    title: 'Charts & Data/Progress Bar',
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

export const ProgBar = (args) => <ProgressBar {...args} />

ProgBar.storyName ='Progress Bar'