/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../../designElements/buttons/Button'
import Glyph from '../../../../../svg/assets/fpo/glyph-1.svg'

const IconTextButton = ({ icon, textText, buttonContent, ...props }) => (
    <>
        <Box>
            <Box>{icon}</Box>
            <Text>{textText}</Text>
            {buttonContent}
        </Box>
    </>
)

IconTextButton.propTypes = {
    buttonContent: PropTypes.string,
    icon: PropTypes.any,
    textText: PropTypes.string,
}

IconTextButton.defaultProps = {
    icon: <Glyph />,
    buttonContent: <Button />,
    textText:
        'Deserunt nostrud ex commodo enim. Duis in deserunt magna magna id consequat ullamco non dolore. Consectetur reprehenderit nostrud incididunt consequat mollit excepteur in anim dolore ad.',
}

export default IconTextButton
