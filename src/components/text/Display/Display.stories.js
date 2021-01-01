/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Paragraph from '../Paragraph'
import Display from './Display'

export default {
    title: 'Components/Typography/Display',
    component: Display,
}

export const standard = () => (
    <>
        <Paragraph >
            Occaecat culpa quis nulla do tempor amet sint veniam commodo veniam
            aute ullamco. Magna reprehenderit aliquip nostrud excepteur irure.
        </Paragraph>
        <Display />
        <Paragraph>
            Adipisicing nostrud id laboris officia exercitation laboris in ipsum
            nostrud qui culpa quis. Mollit velit fugiat et cillum ea officia.
            Exercitation do magna sint fugiat adipisicing eu magna eiusmod
            cupidatat non amet aute cillum. Dolor cupidatat proident non officia
            nostrud officia proident sint tempor. Ex sunt anim velit consectetur
            consectetur fugiat Lorem ut amet sit officia ut ea. Ea adipisicing
            est ullamco consectetur.
        </Paragraph>
    </>
)
