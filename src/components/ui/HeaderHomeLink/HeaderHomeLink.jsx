/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import FpoLogo from '../../utilities/fpo/FpoLogo'
import FpoGlyph from '../../utilities/fpo/FpoGlyph'

const HomeLink = ({ largeScreenBrand, smallScreenBrand, ...props }) => (
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
                {largeScreenBrand}
            </Box>

            <Box
                className="smallScreenBrand"
                {...props}
                sx={{
                    display: ['inline-flex', 'none', 'none', 'none'],
                }}
            >
                {smallScreenBrand}
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
