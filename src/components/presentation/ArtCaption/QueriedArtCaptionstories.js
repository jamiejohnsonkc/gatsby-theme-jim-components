import React from "react"
import ArtCaption from "./ArtCaption"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default {
  title: "Base/Content Blocks/Image with caption",
}

const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid {
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

const Pic = (props) => {
  return (
    <Img fluid={data.file.childImageSharp.fluid} alt="The Gatsby Astronaut" />
  )
}

// export const standard = (props) => (
// 	<ArtCaption
// 		imageSource='{fluid={data.file.childImageSharp.fluid}}'
// 		captionText='caption text here'
// 	/>
// )

export const standard = (props) => (
  <ArtCaption compImage={<Pic />} captionText="Caption goes here" />
)
