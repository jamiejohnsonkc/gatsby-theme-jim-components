/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import FpoImageWireFrame from './FpoImageWireFrame'
import StoryBox from '../../../../../../stories/StoryBox/StoryBox'

export default {
    title: 'FpoImageWireFrame',
}

export const standard = (props) => (
    <StoryBox height="50vh" width="50vw">
        <FpoImageWireFrame />
    </StoryBox>
)
