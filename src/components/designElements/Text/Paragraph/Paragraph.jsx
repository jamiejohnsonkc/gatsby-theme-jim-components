/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const StyledParagraph = styled.p``

//TODO Refactor like caption?

const Paragraph = ({ paragraphContainer, ...props }) => (
    <StyledParagraph
        {...props}
        sx={{
            variant: 'paragraphContainer',
        }}
    >
        <Text
            {...props}
            sx={{
                variant: 'paragraphText',
            }}
        >
            {props.children}
        </Text>
    </StyledParagraph>
)

Paragraph.propTypes = {}

Paragraph.defaultProps = {}

export default Paragraph
