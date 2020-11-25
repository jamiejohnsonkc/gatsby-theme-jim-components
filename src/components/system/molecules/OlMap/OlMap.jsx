/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import Ol from '../../atoms/Ol'
import Li from '../../atoms/Li'

const OlMap = ({ list, liVariant, ...props }) => (
    <Ol
        {...props}
        sx={{
            olVariant: `${olVariant}`,
        }}
    >
        {list.map((item) => (
            <Li liVariant={liVariant} key={item}>
                {item}
            </Li>
        ))}
    </Ol>
)

OlMap.propTypes = {
    olVariant: PropTypes.string,
    oliVariant: PropTypes.string,
}

OlMap.defaultProps = {
    olVariant: 'styles.olPlain',
    liVariant: 'styles.liPlain',
}

export default OlMap
