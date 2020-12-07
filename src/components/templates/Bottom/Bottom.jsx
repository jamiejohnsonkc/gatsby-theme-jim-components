/** @jsx jsx */
import { jsx, Box, Divider, Container, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Bottom = ({
    bottomLayoutVariant,
    bottomTextVariant,
    bottomContent,
    ...props
}) => (
    <Box
        sx={{
            variant: `layout.${bottomLayoutVariant}`,
        }}
    >
        <Divider />
        <Container>
            <Text
                sx={{
                    variant: `${bottomTextVariant}`,
                    pt: 2,
                    pb: 2,
                    color: 'text',
                }}
            >
                {bottomContent}
            </Text>
        </Container>
    </Box>
)

Bottom.propTypes = {
    bottomLayoutVariant: PropTypes.any,
    bottomTextVariant: PropTypes.any,
    bottomContent: PropTypes.any,
}

Bottom.defaultProps = {
    bottomLayoutVariant: 'bottom',
    bottomTextVariant: 'legal',
}

export default Bottom
