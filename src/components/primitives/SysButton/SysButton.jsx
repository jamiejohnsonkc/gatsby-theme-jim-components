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
    ...props
}) => (
    <Button
        className="sysButton"
        type="button"
        {...props}
        sx={{
            variant: `buttons.${variant}`,
        }}
    />
)

SysButton.propTypes = {
    variant: PropTypes.string,
}

// SysButton.defaultProps = {
// }
export default SysButton
