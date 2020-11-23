/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import OrgLegalName from '../../../../ui/OrgLegalName'

const Copyright = (props) => (
    <Box>
        © {new Date().getFullYear()}{' '}
        <OrgLegalName children={props.organizationName} />
    </Box>
)

Copyright.propTypes = {
    organizationName: PropTypes.any,
}

Copyright.defaultProps = {
    organizationName: 'jim Marketing',
}

export default Copyright
