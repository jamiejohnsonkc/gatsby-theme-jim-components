/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const StyledUl = styled.ul``

const Ul = ({ variant, ...props }) => (
    <StyledUl
        {...props}
        sx={{
            variant: `${variant}`,
        }}
        children={props.children}
    />
)

Ul.propTypes = {}

Ul.defaultProps = {}

export default Ul
