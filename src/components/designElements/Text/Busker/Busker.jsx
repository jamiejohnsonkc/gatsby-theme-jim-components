/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Busker = ({ as, variant = 'busker', mb, color, ...props }) => (
    <Heading
        {...props}
        as={as}
        sx={{
            variant: `${variant}`,
            mb,
            color,
        }}
    >
        {props.children}
    </Heading>
)

Busker.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
}

Busker.defaultProps = {
    children: 'Buskers grab attention.',
    variant: 'styles.bu1',
}

export default Busker
