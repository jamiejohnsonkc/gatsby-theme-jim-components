/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import FlexBlock from '../flexBlocks/FlexBlock'

const MonoFlexSlate = ({ flexItemContent, ...props }) => (
    <div
        {...props}
        sx={{
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            display: 'flex',
        }}
    >
        <Container className="Container">
            <FlexBlock {...props}>{flexItemContent}</FlexBlock>
        </Container>
    </div>
)

MonoFlexSlate.propTypes = {}

MonoFlexSlate.defaultProps = {}

export default MonoFlexSlate
