/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Bottom from './Bottom'
import Copyright from '../../../molecules/contentBlocks/Copyright/Copyright'

export default {
	title: 'Layout Elements/Page Units/Bottom',
}

export const standard = () => <Bottom bottomContent={<Copyright />} />
