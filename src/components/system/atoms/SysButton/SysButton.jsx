/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import React from 'react'
const SysButton = ({ buttonChild, ...props }) => (
    <Button
        className="sysButton"
        {...props}
        sx={{
            variant: 'buttons.basic',
        }}
    >
        {buttonChild}
    </Button>
)
export default SysButton
