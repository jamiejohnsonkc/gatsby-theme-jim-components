/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import Button from '../../ui/Button'

// TODO refactor props

const TextButton = ({
    boxBg,
    boxPx,
    boxPy,
    buttonButton,
    textMb,
    textText,
    textVariant,
    boxClassName,
    textClassName,
    ...props
}) => (
    <Box
        classname={boxClassName}
        {...props}
        sx={{
            px: `${boxPx}`,
            py: `${boxPy}`,
            bg: `${boxBg}`,
        }}
    >
        <Text
            classname={textClassName}
            {...props}
            sx={{
                mb: `${textMb}`,
                variant: `${textVariant}`,
            }}
        >
            {textText}
        </Text>
        {buttonButton}
    </Box>
)

TextButton.propTypes = {
    boxBg: PropTypes.string,
    boxClassName: PropTypes.string,
    textClassName: PropTypes.string,
    boxPx: PropTypes.number,
    boxPy: PropTypes.number,
    buttonButton: PropTypes.any,
    textMb: PropTypes.number,
    textText: PropTypes.string,
    textVariant: PropTypes.string,
}

TextButton.defaultProps = {
    boxBg: 'transparent',
    boxPx: 4,
    boxPy: 4,
    buttonButton: <Button variant="buttons.primaryMd" />,
    textMb: 4,
    textText:
        'Text lg lorem ea aliqua adipisicing ex sunt culpa in. Nisi ut veniam pariatur ullamco sint magna eu id sint voluptate ullamco laboris. Ex nostrud tempor pariatur commodo exercitation enim duis nulla. Commodo aliqua dolor qui reprehenderit quis reprehenderit veniam voluptate nulla culpa nisi.',
    textVariant: 'text.text_md',
}

export default TextButton
