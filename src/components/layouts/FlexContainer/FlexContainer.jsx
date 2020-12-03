/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import TextLink from '../../presentation/TextLink'
import FlexItem from '../FlexItem'

const FlexContainer = ({ flexContainerVariant, ...props }) => (
    <Flex variant={flexContainerVariant}>
        {/* <Box p={2} bg="primary" sx={{ flex: '1 1 auto' }}>
            Flex
        </Box>
        <Box p={2} bg="muted">
            Box
        </Box> */}

        {props.children}

        {/* <Box
            {...props}
            sx={{
                flex: 1,
            }}
        >
            <TextLink />
        </Box>
        <Box
            {...props}
            sx={{
                flex: 1,
            }}
        >
            <TextLink />
        </Box> */}
    </Flex>
)

FlexContainer.propTypes = {
    flexContainerVariant: PropTypes.any,
}

FlexContainer.defaultProps = {
    flexContainerVariant: 'flex.columnsRows',
}

export default FlexContainer
