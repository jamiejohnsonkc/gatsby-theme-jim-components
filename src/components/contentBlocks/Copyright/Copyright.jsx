/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import OrgLegalName from '../../ui/OrgLegalName'

const Copyright = ({ copyrightDisplay, organizationName, ...props }) => {
    return (
        <Box
            {...props}
            sx={{
                display: `${copyrightDisplay}`,
                fontSize: '10px',
                fontFamily: 'legal',
                color: 'muted',
            }}
        >
            ©{new Date().getFullYear()}
            <OrgLegalName>
                {'\u00A0'}
                {organizationName}
            </OrgLegalName>
        </Box>
    )
}

Copyright.propTypes = {
    organizationName: PropTypes.string,
    copyrightDisplay: PropTypes.string,
}

Copyright.defaultProps = {
    organizationName: 'jamie johnson',
    copyrightDisplay: 'inline-block',
}

export default Copyright
