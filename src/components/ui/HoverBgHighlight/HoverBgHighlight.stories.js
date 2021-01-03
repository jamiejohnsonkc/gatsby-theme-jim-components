/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from 'theme-ui'
import React from 'react'
import HoverBgHighlight from './HoverBgHighlight'

export default {
  title: 'Ui/Effects/Hover',
  component: HoverBgHighlight,
  argTypes: {
    // backgroundColor: { control: 'color' },
    backgroundHoverColor: { control: 'color' },
    textColor: { control: 'color' },
    // fontSize: { control: 'string' },
    differenceColor: { control: 'color' },
    children: { control: 'text' },
  },
}

export const Primary = ({ args, ...props }) => (
  <HoverBgHighlight
    {...props}
    sx={{
      fontSize: 5,
      fontFamily: 'heading',
      fontWeight: 'heavy',
        outlineColor: 'primary',
      //   textColor: 'text',
      //   underlineHeight: '4px',
    }}
    // {...args}

/>


)

Primary.storyName = 'Hover: Background Highlight'
// Primary.children = 'children'