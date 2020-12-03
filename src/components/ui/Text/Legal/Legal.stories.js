import React from 'react'

import Copyright from '../../../containers/Copyright'
import Legal from './Legal'

export default {
    title: 'Typography/Legal',
    component: Legal,
}

export const standard = () => (
    <div style={{ borderTop: 'thin solid #999', paddingTop: '8px' }}>
        <Legal>
            The large print giveth and the fine print taketh away. ©2020 All rights reserved.
        </Legal>
    </div>
)
