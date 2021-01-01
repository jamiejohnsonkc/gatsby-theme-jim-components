/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

// TODO refactor & confirm necessity

const Span = (props) => <span>{props.children}</span>

Span.propTypes = {}

Span.defaultProps = {}

export default Span
