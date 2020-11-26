/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Bottom from './Bottom'
import Copyright from '../../system/molecules/contentBlocks/Copyright'

export default {
	title: 'Layout/Page Elements/Bottom',
}

export const standard = () => <Bottom bottomContent={<Copyright />} />
