/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import Button from '../../ui/buttons/Button'

// TODO refactor props

const TextButton = ({
    boxPy,
    boxPx,
    boxBg,
    buttonText,
    buttonTo,
    textText,
    textVariant,
    buttonVariant,
    ...props
}) => (
    <Box
        {...props}
        sx={{
            px: `${boxPx}`,
            py: `${boxPy}`,
            bg: `${boxBg}`,
        }}
    >
        <Text
            {...props}
            sx={{
                variant: `${textVariant}`,
                mb: 4,
            }}
        >
            {textText}
        </Text>
        <Button
            {...props}
            sx={{
                variant: `${buttonVariant}`,
            }}
            to={buttonTo}
        >
            {buttonText}
        </Button>
    </Box>
)

TextButton.propTypes = {
    buttonText: PropTypes.string,
    buttonTo: PropTypes.string,
    buttonVariant: PropTypes.string,
    textText: PropTypes.string,
    textVariant: PropTypes.string,
    boxPx: PropTypes.string,
    boxPy: PropTypes.string,
    boxBg: PropTypes.string,
}

TextButton.defaultProps = {
    buttonText: 'Button',
    buttonTo: '/',
    buttonVariant: 'buttons.md',
    textText:
        'Text lg lorem ea aliqua adipisicing ex sunt culpa in. Nisi ut veniam pariatur ullamco sint magna eu id sint voluptate ullamco laboris. Ex nostrud tempor pariatur commodo exercitation enim duis nulla. Commodo aliqua dolor qui reprehenderit quis reprehenderit veniam voluptate nulla culpa nisi.',
    textVariant: 'text.text_md',
    boxPx: 4,
    boxPy: 4,
    boxBg: 'transparent',
}

export default TextButton
