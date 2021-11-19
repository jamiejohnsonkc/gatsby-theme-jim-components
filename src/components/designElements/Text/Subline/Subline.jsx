// /** @jsx jsx */
// import { jsx, Heading } from 'theme-ui'
// import React from 'react'

// const Subline = ({ as, ...props }) => (
//     <Heading
//         {...props}
//         as={as}
//         sx={{
//             variant: 'subline',
//         }}
//         children={props.children}
//     />
// )

// export default Subline

/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Subline = ({ as, mb, color, variant, ...props }) => (
    <Heading
        variant="subline"
        {...props}
        as={as}
        sx={{
            variant: `${variant}`,
            mb,
            color,
        }}
    >
        {props.children}
    </Heading>
)

Subline.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
}

Subline.defaultProps = {
    children: 'Sublines are a stylish alternative to subheads',
    variant: 'styles.h3',
}

export default Subline
