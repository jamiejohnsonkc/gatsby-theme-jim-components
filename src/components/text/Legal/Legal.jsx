/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Legal = ({
    variant = 'legal',
    fontFamily,
    fontWeight,
    display,
    ...props
}) => (
    <Text
        {...props}
        sx={{
            variant: `${variant}`,
            display: `${display}`,
            fontFamily: `${fontFamily}`,
            fontWeight: `${fontWeight}`,
        }}
        children={props.children}
    />
)

Legal.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
    display: PropTypes.string,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.string,
}

Legal.defaultProps = {
    children: 'Legal. The large print giveth and the fine print taketh away',
    display: 'inline-block',
    fontWeight: 'regular',
    fontFamily: 'heading',
    variant: 'styles.u3',
}

export default Legal
