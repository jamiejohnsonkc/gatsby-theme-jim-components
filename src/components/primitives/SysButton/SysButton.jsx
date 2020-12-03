/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Button, Text } from 'theme-ui'
import React from 'react'

//TODO confirm button style functionality (button, outline, pill, pill outline)
//TODO Test button functionality - how to handle internal vs external button links(?)

const SysButton = ({
    buttonChild,
    variant = 'buttons.basic',
    bg,
    border,
    borderColor,
    borderRadius,
    buttonType,
    ...props
}) => (
    <Button
        className="sysButton"
        type={buttonType}
        {...props}
        sx={{
            variant: `buttons.${variant}`,
        }}
    />
)

SysButton.propTypes = {
    variant: PropTypes.string,
    buttonType: PropTypes.string,
}

SysButton.defaultProps = {
    buttonType: 'button',
}
export default SysButton
