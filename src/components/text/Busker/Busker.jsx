/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Busker = ({
    as,
    variant = 'busker',
    mb,
    fontFamily,
    fontWeight,
    maxWidth,
    color,
    ...props
}) => (
    <Heading
        {...props}
        as={as}
        sx={{
            mb,
            color,
            variant: `${variant}`,
            fontFamily: `${fontFamily}`,
            fontWeight: `${fontWeight}`,
            maxWidth: `${maxWidth}`,
        }}
    >
        {props.children}
    </Heading>
)

Busker.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.string,
    maxWidth: PropTypes.string,
}

Busker.defaultProps = {
    children: 'Buskers grab attention',
    variant: 'styles.bu1',
    fontWeight: 'heavy',
    fontFamily: 'heading',
    maxWidth: '12em',
}

export default Busker
