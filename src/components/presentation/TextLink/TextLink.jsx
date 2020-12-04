/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import Button from '../../ui/Button'
import AnchorLink from '../../primitives/AnchorLink'

// TODO refactor props

const TextLink = ({
    boxPy,
    boxPx,
    boxBg,
    buttonText,
    textText,
    textVariant,
    buttonVariant,
    linkLink,
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
        {linkLink}
    </Box>
)

TextLink.propTypes = {
    buttonText: PropTypes.string,
    buttonTo: PropTypes.string,
    buttonVariant: PropTypes.string,
    textText: PropTypes.string,
    textVariant: PropTypes.string,
    boxPx: PropTypes.string,
    boxPy: PropTypes.string,
    boxBg: PropTypes.string,
    linkLink: PropTypes.object,
}

TextLink.defaultProps = {
    buttonText: 'Button',
    buttonTo: '/',
    buttonVariant: 'buttons.md',
    textText:
        'Loren gypsum dolor sit met, sit bemuses complected, dolor em pertinacity dissenter est re. Pro ad prompts feud gait, quid exercise emeritus bis es.',
    textVariant: 'text.text_md',
    boxPx: 4,
    boxPy: 4,
    boxBg: 'transparent',
    linkLink: <AnchorLink linkTo="/">Anchor Link</AnchorLink>,
}

export default TextLink
