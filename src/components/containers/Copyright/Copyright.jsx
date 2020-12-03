/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import OrgLegalName from '../../ui/OrgLegalName'

const Copyright = ([{ copyrightDisplay, organizationName, ...props }]) => (
    <Box
        {...props}
        sx={{
            display: `${copyrightDisplay}`,
        }}
    >
        ©{new Date().getFullYear()}
        <OrgLegalName>{organizationName}</OrgLegalName>
    </Box>
)

Copyright.propTypes = {
    organizationName: PropTypes.any,
    copyrightDisplay: PropTypes.any,
}

Copyright.defaultProps = {
    organizationName: 'jim Marketing',
    copyrightDisplay: 'inline-block',
}

export default Copyright
