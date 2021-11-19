/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import FpoLogo from '../../../utilities/fpo/FpoLogo'
import FpoGlyph from '../../../utilities/fpo/FpoGlyph'
import { Link } from 'gatsby'

const HomeLink = (props) => (
    <>
        <Link to="/">
            <Box
                className="largeScreenBrand"
                {...props}
                sx={{
                    display: [
                        'none',
                        'inline-flex',
                        'inline-flex',
                        'inline-flex',
                    ],
                }}
            >
                {props.largeScreenBrand}
            </Box>

            <Box
                className="smallScreenBrand"
                {...props}
                sx={{
                    display: ['inline-flex', 'none', 'none', 'none'],
                }}
            >
                {props.smallScreenBrand}
            </Box>
        </Link>
    </>
)

HomeLink.propTypes = {
    largeScreenBrand: PropTypes.any,
    smallScreenBrand: PropTypes.any,
}

HomeLink.defaultProps = {
    largeScreenBrand: <FpoLogo />,
    smallScreenBrand: <FpoGlyph />,
}

export default HomeLink
