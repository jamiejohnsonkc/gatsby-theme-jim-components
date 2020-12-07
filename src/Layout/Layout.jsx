/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Layout = (props) => <Box>{props.children}</Box>

Layout.propTypes = {}

Layout.defaultProps = {}

export default Layout
