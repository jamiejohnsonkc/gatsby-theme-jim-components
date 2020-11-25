/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import Button from '../../designElements/buttons/Button'

//TODO refactor props

const TextButton = (props) => (
    <>
        <Text
            {...props}
            sx={{
                variant: `${props.textVariant}`,
                mb: 4,
            }}
        >
            {props.textText}
        </Text>
        <Button
            {...props}
            sx={{
                variant: `${props.buttonVariant}`,
            }}
            to={props.buttonTo}
        >
            {props.buttonText}
        </Button>
    </>
)

TextButton.propTypes = {
    buttonText: PropTypes.any,
    buttonTo: PropTypes.any,
    textText: PropTypes.any,
    textVariant: PropTypes.any,
}

TextButton.defaultProps = {
    buttonText: 'Button',
    buttonTo: '/',
    buttonVariant: '',
    textText:
        'Text lg lorem ea aliqua adipisicing ex sunt culpa in. Nisi ut veniam pariatur ullamco sint magna eu id sint voluptate ullamco laboris. Ex nostrud tempor pariatur commodo exercitation enim duis nulla. Commodo aliqua dolor qui reprehenderit quis reprehenderit veniam voluptate nulla culpa nisi.',
    textVariant: 'text.text_lg',
}

export default TextButton
