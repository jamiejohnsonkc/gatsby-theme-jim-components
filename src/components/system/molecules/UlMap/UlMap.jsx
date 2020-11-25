/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import Ul from '../../atoms/Ul'
import Li from '../../atoms/Li'

const UlMap = ({ list, ulVariant, liVariant, ...props }) => (
    <Ul
        {...props}
        sx={{
            ulVariant: `${ulVariant}`,
        }}
    >
        {list.map((item) => (
            <Li liVariant={liVariant} key={item}>
                {item}
            </Li>
        ))}
    </Ul>
)

UlMap.propTypes = {
    ulVariant: PropTypes.string,
    uliVariant: PropTypes.string,
}

UlMap.defaultProps = {
    ulVariant: 'styles.ulPlain',
    liVariant: 'styles.liPlain',
}

export default UlMap
