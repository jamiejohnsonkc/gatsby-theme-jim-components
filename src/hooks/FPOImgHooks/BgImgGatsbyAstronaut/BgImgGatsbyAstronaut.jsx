/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

const BgImgGatsbyAstronaut = () => {
  const data = useStaticQuery(graphql`
    query BgImgFPO {
      file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)

  return data.file.childImageSharp.fluid
}

console.log(BgImgGatsbyAstronaut)

export default BgImgGatsbyAstronaut
