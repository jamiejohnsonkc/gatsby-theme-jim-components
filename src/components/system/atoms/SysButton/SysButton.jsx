/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import React from 'react'

//TODO confirm button style functionality (button, outline, pill, pill outline)

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
