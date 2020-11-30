/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const StyledParagraph = styled.p``

//TODO Refactor like caption?

const Paragraph = ({ paragraphContainer, paragraph, ...props }) => (
    <StyledParagraph
        {...props}
        sx={{
            variant: 'paragraphContainer',
        }}
    >
        <Text
            {...props}
            sx={{
                variant: `${paragraph}`,
            }}
        >
            {props.children}
        </Text>
    </StyledParagraph>
)

Paragraph.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
}

Paragraph.defaultProps = {
    children:
        'Body copy is used to explain and support your claims and positioning. Commodo incididunt qui cupidatat qui aliqua voluptate veniam pariatur exercitation eu. Duis culpa fugiat occaecat cupidatat qui mollit cupidatat duis eu magna occaecat ad. Proident tempor aliqua labore sunt laborum ipsum dolore deserunt culpa Lorem labore non eu.',
    variant: 'text.p_md',
}

export default Paragraph
