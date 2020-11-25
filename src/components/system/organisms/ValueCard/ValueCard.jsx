/** @jsx jsx */
import { jsx, Card } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import IconTextButton from '../../molecules/contentBlocks/IconTextButton'

// TODO refactor style

const ValueCard = (props) => (
    <Card>
        <IconTextButton
            buttonContent="button"
            buttonVariant="buttons.lg"
            iconColor="baseline"
            iconName="jimGlyph"
            iconSize="4em"
            iconTitle="jim glyph"
            textText="Deserunt nostrud ex commodo enim. Duis indeserunt magna magna id consequat ullamco non dolore. Consectetur reprehenderit nostrud incididunt consequat mollit excepteur in anim dolore ad."
            textVariant="text.text_lg"
        />
    </Card>
)

ValueCard.propTypes = {}

ValueCard.defaultProps = {}

export default ValueCard
