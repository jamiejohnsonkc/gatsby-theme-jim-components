/** @jsx jsx */
import { jsx, Box, Divider, Container, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import Copyright from '../../contentBlocks/Copyright'

const BottomElement = (props) => (
    <Text
        color="red"
        {...props}
        sx={{
            fontFamily: 'heading',
            fontSize: '10px',
            lineHeight: 1,
            display: ['flex', 'flex', 'inline-flex', null, null, null],
            letterSpacing: 'loose',
            minHeight: ['1em', '1em', '4em', '4em', '4em', '4em'],
        }}
    />
)

const BottomContact = (props) => (
    <Box
        {...props}
        sx={{
            display: ['flex', 'flex', 'inline-flex', null, null, null],

            minWidth: '16em',
            justifyContent: 'space-between',
            minHeight: ['1em', '1em', '4em', '4em', '4em', '4em'],
            order: [1, 1, 2, 2, 2, 2],
        }}
    />
)

const Bottom = ({
    bottomLayoutVariant,
    bottomTextVariant,
    bottomContent,
    ...props
}) => (
    <>
        {' '}
        <Box
            sx={{
                variant: `layout.${bottomLayoutVariant}`,
                // lineHeight: 1,
                flexDirection: ['column', 'column', 'row', 'row', 'row'],
                bg: 'black',
                display: 'flex',
                justifyContent: [
                    'center',
                    'center',
                    'space-between',
                    null,
                    null,
                    null,
                ],
                alignItems: 'center',
                height: '4em',
                px: [1, 2, 4, null, null, null],
            }}
        >
            <Copyright
                {...props}
                sx={{
                    order: [2, 2, 1, 1, 1, 1],
                    color: 'primary',
                    // flex: 'auto',
                    // textAlign: 'left',
                }}
            />
            <BottomContact>
                <BottomElement>jamiejohnsonkc@gmail.com</BottomElement>
                <BottomElement>
                    <>&#8226;</>
                </BottomElement>
                <BottomElement>913-207-6966</BottomElement>
            </BottomContact>
        </Box>
    </>
)

Bottom.propTypes = {
    bottomLayoutVariant: PropTypes.any,
    bottomTextVariant: PropTypes.any,
}

Bottom.defaultProps = {
    bottomLayoutVariant: 'bottom',
    bottomTextVariant: 'legal',
}

export default Bottom
