/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
// import useOutsideClick from '../../../../../../../gatsby-theme-nav-fulloverlay/src/hooks/useOutsideClick'
// import useOutsideClick from '../../../../../gatsby-theme-nav-fulloverlay/src/hooks/useOutsideClick'

const Main = (props) => {
    // const ref = useRef()

    // useOutsideClick(ref, () => {
    //     alert('You clicked outside')
    // })
    return (
        <Box
            // as="main"
            // ref={ref}
            {...props}
            sx={{
                variant: 'layout.main',
            }}
        >
            {props.children}
        </Box>
    )
}

Main.propTypes = {}

Main.defaultProps = {}

export default Main
