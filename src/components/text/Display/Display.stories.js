/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Display from './Display'

export default {
  title: 'Components/Typography',
  component: Display,
  argTypes: {
    variant: {
        name: 'size',
        control: {
            type: 'select',
            options: {
                large: 'styles.d1',
                medium: 'styles.d2',
                small: 'styles.d3',
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
              semibold: 'semibold',
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

export const DisplayStory = (args) => <Display {...args} />

DisplayStory.storyName = 'Display'
