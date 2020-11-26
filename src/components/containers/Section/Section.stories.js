/** @jsx jsx */
import { jsx, Box, Grid } from 'theme-ui'
import React from 'react'
import Section from './Section'
import Article from '../Article'

export default {
	title: 'Layout/Section',
}

export const standard = (props) => (
	<>
<Section bg='#fafafa' p={6} mx={4} my={4}>{props.children}</Section>
	</>
)
