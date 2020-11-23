/** @jsx jsx */
import { Container, jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import FlexCover from '../FlexCover'

const SectionFlex = ({
    containerVariant,
    bg,
    sectionBg,
    justifyContent,
    alignItems,
    className,
    variant,
    sectionVariant,
    containerFlexDirection,
    ...props
}) => (
    <>
        <FlexCover
            as="section"
            bg={sectionBg}
            variant={sectionVariant}
            className={className}
        >
            <Container
                className="container"
                {...props}
                sx={{
                    // maxWidth: { containerMaxWidth },
                    variant: `${containerVariant}`,
                    display: 'flex',
                    justifyContent: `${justifyContent}`,
                    alignItems: `${alignItems}`,
                    flexDirection: `${containerFlexDirection}`,
                }}
                // sectionMinHeight='100px'
            >
                {props.children}
            </Container>
        </FlexCover>
    </>
)

SectionFlex.propTypes = {
    alignItems: PropTypes.string,
    bg: PropTypes.any,
    children: PropTypes.string,
    className: PropTypes.any,
    containerFlexDirection: PropTypes.string,
    containerVariant: PropTypes.string,
    justifyContent: PropTypes.string,
    sectionBg: PropTypes.any,
    sectionVariant: PropTypes.any,
    variant: PropTypes.any,
}

SectionFlex.defaultProps = {
    alignItems: 'center',
    justifyContent: 'center',
    containerFlexDirection: 'row',
    containerVariant: 'layout.container',
    children: 'section children',
}

export default SectionFlex
