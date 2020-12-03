/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Bottom from './Bottom'
import Copyright from '../../containers/Copyright'

export default {
	title: 'Layout/Page Elements/Bottom',
}

export const standard = () => <Bottom bottomContent={<Copyright />} />
