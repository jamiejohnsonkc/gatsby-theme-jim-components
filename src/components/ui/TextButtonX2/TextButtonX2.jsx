/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const TextButtonX2 = ({
    textVariant,
    textText,
    buttonVariant,
    buttonTo,
    buttonText,
    button2Variant,
    button2To,
    button2Text,
    ...props
}) => (
    <>
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
                marginRight: 2,
            }}
            to={buttonTo}
        >
            {buttonText}
        </Button>
        <Button
            {...props}
            sx={{
                variant: `${button2Variant}`,
            }}
            to={button2To}
        >
            {button2Text}
        </Button>
    </>
)

TextButtonX2.propTypes = {
    button2Text: PropTypes.any,
    button2To: PropTypes.any,
    button2Variant: PropTypes.any,
    buttonText: PropTypes.any,
    buttonTo: PropTypes.any,
    buttonVariant: PropTypes.any,
    textText: PropTypes.any,
    textVariant: PropTypes.any,
}

TextButtonX2.defaultProps = {
    button2Text: 'Button2',
    button2To: '/',
    button2Variant: 'buttons.lg',
    buttonText: 'Button',
    buttonTo: '/',
    buttonVariant: 'buttons.lg',
    textText:
        'Text lg lorem ea aliqua adipisicing ex sunt culpa in. Nisi ut veniam pariatur ullamco sint magna eu id sint voluptate ullamco laboris. Ex nostrud tempor pariatur commodo exercitation enim duis nulla. Commodo aliqua dolor qui reprehenderit quis reprehenderit veniam voluptate nulla culpa nisi.',
    textVariant: 'text.text_lg',
}

export default TextButtonX2
