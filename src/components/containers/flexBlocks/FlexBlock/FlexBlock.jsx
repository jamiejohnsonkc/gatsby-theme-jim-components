/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const FlexBlock = ({
    flexBoxItem,
    blockBg,
    blockHeight,
    blockWidth,
    boxFlex,
    boxPadding,
    boxBg,
    boxColor,
    ...props
}) => (
    <Flex
        {...props}
        className="flexBlock"
        sx={{
            bg: `${blockBg}`,
            flexDirection: ['column', 'column', 'row'],
            height: `${blockHeight}`,
            width: `${blockWidth}`,
        }}
    >
        <Box
            {...props}
            className="flexBox"
            sx={{
                flex: `${boxFlex}`,
                p: `${boxPadding}`,
                bg: `${boxBg}`,
                color: `${boxColor}`,
            }}
        >
            {flexBoxItem}
        </Box>
    </Flex>
)

FlexBlock.propTypes = {
    blockBg: PropTypes.any,
    blockHeight: PropTypes.any,
    blockWidth: PropTypes.any,
    boxBg: PropTypes.any,
    boxColor: PropTypes.any,
    boxFlex: PropTypes.any,
    boxPadding: PropTypes.any,
    flexBoxItem: PropTypes.any,
}

FlexBlock.defaultProps = {
    blockBg: 'gray',
    blockHeight: '100%',
    blockWidth: '50%',
    boxBg: 'lightGray',
    boxColor: '#020202',
    boxFlex: '1 1 83.83%',
    boxPadding: 2,
    flexBoxItem: (
        <p>
            Cupidatat exercitation fugiat incididunt nisi nulla reprehenderit
            consectetur sunt veniam voluptate pariatur ipsum minim ut. Proident
            nulla deserunt in eu qui. Commodo voluptate pariatur laborum magna
            veniam sint elit magna aute sit mollit non sunt nulla. Et fugiat
            aute eu eu Lorem ipsum deserunt non anim.
        </p>
    ),
}

export default FlexBlock
