/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import ArtTextButton from './ArtTextButton'
import FpoImageWireFrame from '../../utilities/fpo/FpoImageWireFrame'

export default {
    title: 'Content Blocks/Art, text & button',
    component: ArtTextButton,
    argTypes: {
        // blockWidth: {control: ''},
        // visualHeight: {control: ''},
        // visualWidth: {control: ''},
        // visualMb: {control: ''},
        visual: { control: 'object' },
        headingVariant: {
            control: 'select',
            options: ['h1', 'h2', 'h3'],
        },
        headingAs: {
            control: 'select',
            options: ['h1', 'h2', 'h3'],
        },
        headingText: { control: 'text' },
        textVariant: {
            control: 'select',
            options: ['text.text_lg', 'text.text_md', 'text.text_sm'],
        },
        textText: { control: 'text' },
    },
}

const Template = (args) => <ArtTextButton {...args} />

export const Grid = Template.bind({})
Grid.args = {
	blockWidth: '100%',
	visual: <FpoImageWireFrame />,
	visualHeight: '10em',
	visualWidth: '3em',
	visualMb: 4,
	headingText: 'Romanesque foreordains xiv',
	headingVariant: 'h3',
	textText:
			'Loren sump dolor sit meat, it sumo, facet constitute re es. Est ponder um expedients cu, veil ex quid dictum momentum.',
	textVariant: 'text_lg',
	headingAs: 'h3',
	blockDisplay: 'flex',
	blockStyle: '{{flex: `1 0 auto`, flexDirection: row, flexWrap: wrap}}',
}

// export const Flex = Template.bind({})
// Med.args = {
//     ,
// }

