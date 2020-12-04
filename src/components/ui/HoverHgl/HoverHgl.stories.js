/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import HoverHgl from './HoverHgl'

export default {
    title: 'Style/Hover Styles/Hover:background highlight',
    component: HoverHgl,
    argTypes: {
        color: { control: 'color' },

    },
}

export const standard = ({
    args,
    differenceColor,
    outlineColor,
    textColor,
    ...props
}) => (
    <HoverHgl
        {...props}
        sx={{
            fontSize: 5,
            fontFamily: 'heading',
            fontWeight: 'heavy',
            outlineColor: 'primary',
            textColor: 'text',
            underlineColor: 'primary',
            underlineHeight: '4px',
            children: 'Hover: Animated Highlight',
        }}
        {...args}
    />
)


