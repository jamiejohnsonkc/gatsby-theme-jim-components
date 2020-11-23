/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import React from 'react'
const SysButton = (props) => (
	<Button
		className='sysButton'
		{...props}
		sx={{
			variant: 'buttons.basic',
		}}
		children={props.children}
	/>
)
export default SysButton
