/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Paragraph from '../Paragraph'
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

export const DisplayStory = (args) => <Display {...args} />

DisplayStory.storyName = 'Display'
