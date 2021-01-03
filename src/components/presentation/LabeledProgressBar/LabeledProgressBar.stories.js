import React from 'react'
import LabeledProgressBar from './LabeledProgressBar'

export default {
    title: 'Charts & Data/Labeled Progress Bar',
    component: 'LabeledProgressBar',
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
            control: 'color',
            name: 'background color',
        },
    },
}

export const LabeledBar = (args) => <LabeledProgressBar {...args} />

LabeledBar.storyName = 'Labeled Progress Bar'
