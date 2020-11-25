/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Footer = (footerContent, ...props) => (
    <Flex
        {...props}
        sx={{
            flexWrap: 'wrap',
            alignItems: 'center',
            mx: 'auto',
            px: 2,
            py: 4,
        }}
    >
        <Box
            {...props}
            sx={{
                p: 2,
            }}
        >
            {footerContent}
        </Box>
    </Flex>
)
Footer.propTypes = {
    footerContent: PropTypes.any,
}

Footer.defaultProps = {
    footerContent: 'FooterContent',
}

export default Footer
