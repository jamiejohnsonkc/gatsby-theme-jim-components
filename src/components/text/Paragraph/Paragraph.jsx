/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const StyledParagraph = styled.p``

//TODO Refactor like caption?

const Paragraph = ({ paragraphContainer, variant, ...props }) => (
    <StyledParagraph
        {...props}
        sx={{
            variant: 'paragraphContainer',
        }}
    >
        <Text
            {...props}
            sx={{
                variant: `${variant}`,
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
        'Paragraphs provide supporting claims and proof of your positioning. Loren sum dolor sit mate, bland it ex enc, est am banyan yeti detract re. Ill um deselect ma ad, en ferric patine sentient vim. Ad sit bemuses complected, dolor em pertinacity dissenter est re. Dec ore offend it man re, est no dolor es explicate, re dicta elect ram demo critic duo. Pro id bonobo accustoms.',
    variant: 'text.p_sm',
}

export default Paragraph
