/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import HoverBgHighlight from './HoverBgHighlight'

export default {
    title: 'Style/Hover Styles/Hover:background highlight',
    component: HoverBgHighlight,
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
    <HoverBgHighlight
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


