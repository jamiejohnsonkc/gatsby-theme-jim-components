/** @jsx jsx */
import { jsx, Box, Button } from 'theme-ui'
import React, { useState } from 'react'

const Accordion = ({ title, children, ...props }) => {
    const [isOpen, setOpen] = React.useState(false)
    return (
        <Box
            className="accordionWrapper"
            {...props}
            sx={{
                width: '600px',
                margin: '0 auto',
            }}
        >
            <Box
                className={`accordionTitle ${isOpen ? 'open' : ''}`}
                onClick={() => setOpen(!isOpen)}
                {...props}
                sx={{
                    fontWeight: '600',
                    cursor: 'pointer',
                    color: '#666',
                    padding: '0.5em 1.5em',
                    border: 'solid 1px #ccc',
                    borderRadius: '1.5em',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    '&::after': {
                        content: '""',
                        width: '0',
                        height: '0',
                        borderLeft: '5px solid transparent',
                        borderRight: '5px solid transparent',
                        borderTop: '5px solid currentColor',
                    },
                    '&:hover, &.open': {
                        color: 'black',
                    },
                    '&.open': {
                        '&::after': {
                            content: '""',
                            borderTop: '0',
                            borderBottom: '5px solid',
                        },
                    },
                }}
            >
                {title}
            </Box>
            <Box
                className={`accordionItem ${!isOpen ? 'collapsed' : ''}`}
                {...props}
                sx={{
                    overflow: 'hidden',
                    transition: 'max-height 0.3s cubic-bezier(1, 0, 1, 0)',
                    height: 'auto',
                    maxHeight: '9999px',
                    '&.collapsed': {
                        maxHeight: '0',
                        transition: 'max-height 0.35s cubic-bezier(0, 1, 0, 1)',
                    },
                }}
            >
                <Box className="accordionContent">{children}</Box>
            </Box>
        </Box>
    )
}

const Accordion2 = (props) => (
    <Box className="wrapper">
        <Accordion title="Why is the sky blue?">
            Sunlight reaches Earth's atmosphere and is scattered in all
            directions by all the gases and particles in the air. Blue light is
            scattered more than the other colors because it travels as shorter,
            smaller waves. This is why we see a blue sky most of the time.
        </Accordion>
        <Accordion title="What's It Like Inside Jupiter?">
            It's really hot inside Jupiter! No one knows exactly how hot, but
            scientists think it could be about 43,000°F (24,000°C) near
            Jupiter's center, or core.
        </Accordion>
        <Accordion title="What Is a Black Hole?">
            A black hole is an area of such immense gravity that nothing -- not
            even light -- can escape from it.
        </Accordion>
    </Box>
)

export default Test
