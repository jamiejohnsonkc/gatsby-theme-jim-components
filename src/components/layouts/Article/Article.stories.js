/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Article from './Article'

export default {
title: 'Layout/Page Elements/Article',
}

export const standard = (props) => (
<Article p={6} m={4} bg={rgba(255,255,255,.5)}>Article</Article>
)