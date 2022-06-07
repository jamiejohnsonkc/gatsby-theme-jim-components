/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const StyledParagraph = (props) => <p>{props.children}</p>

//TODO Refactor like caption?

const Paragraph = ({
    paragraphContainer,
    maxWidth,
    variant,
    fontWeight,
    fontFamily,
    as,
    ...props
}) => (
    <StyledParagraph
        {...props}
        sx={{
            variant: 'paragraphContainer',
        }}
    >
        <Text
            {...props}
            as="p"
            sx={{
                variant: `${variant}`,
                fontWeight: `${fontWeight}`,
                maxWidth: `${maxWidth}`,
                fontFamily: `${fontFamily}`,
            }}
        >
            {props.children}
        </Text>
    </StyledParagraph>
)

Paragraph.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.any,
    fontWeight: PropTypes.string,
    maxWidth: PropTypes.string,
    fontFamily: PropTypes.string,
}

Paragraph.defaultProps = {
    children:
        'Paragraphs provide supporting claims and proof of your positioning. Loren sum dolor sit mate, bland it ex enc, est am banyan yeti detract re. Ill um deselect ma ad, en ferric patine sentient vim. Ad sit bemuses complected, dolor em pertinacity dissenter est re. Dec ore offend it man re, est no dolor es explicate, re dicta elect ram demo critic duo. Pro id bonobo accustoms.',
    variant: 'styles.p2',
    fontWeight: '300',
    fontFamily: 'body',
    maxWidth: '42em',
}

export default Paragraph
