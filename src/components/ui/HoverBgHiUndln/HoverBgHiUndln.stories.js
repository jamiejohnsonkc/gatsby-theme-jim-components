/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import HoverBgHiUndln from './HoverBgHiUndln'

export default {
  title: 'Ui/Effects/Hover',
  component: HoverBgHiUndln,
  argTypes: {
    backgroundColor: { control: 'color' },
    backgroundHoverColor: { control: 'color' },
    textColor: { control: 'color' },
    underlineColor: { control: 'color' },
    differenceColor: { control: 'color' },
  },
}

const Template = ({ args, ...props }) => (
  <HoverBgHiUndln
    {...props}
    sx={{
      fontSize: 5,
      fontFamily: 'heading',
      fontWeight: 'heavy',
      underlineColor: 'primary',
      underlineHeight: '2em',
      differenceColor: 'rgb(252,86,11)',
      transition: 'transform 275ms ease',
      '&:before': {
        transition: 'transform 275ms ease',
        // 	color: 'primary',
      },
    }}
    {...args}
  />
)

export const Primary = Template.bind({})
Primary.storyName = 'Hover: Background Highlight & Underline'
Primary.args = {
  children: 'highlight background light',
}

export const Secondary = Template.bind({})
Secondary.storyName = 'Hover: Background Highlight & Underline'
Secondary.args = {
  children: 'highlight background dark',
}
