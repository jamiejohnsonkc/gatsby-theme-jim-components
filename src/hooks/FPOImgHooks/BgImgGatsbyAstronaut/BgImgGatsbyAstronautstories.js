/** @jsx jsx */
import { jsx, Box, Text } from "theme-ui"
import React from "react"
import BgImgGatsbyAstronaut from "./BgImgGatsbyAstronaut"
import BackgroundImage from "gatsby-background-image"

export default {
  title: "BgImgGatsbyAstronaut",
}

//! FUNCTIONALITY UNCONFIRMED - comp structure lifted from <BackgroundImg>

export const standard = ({ className, props, children }) => {
  const imageData = BgImgGatsbyAstronaut()
  return (
    <BackgroundImage
      {...props}
      Tag="section"
      className={"BgImage"}
      fluid={imageData}
      backgroundColor={`#040e18`}
      sx={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        height: "100%",
        "&::before": {
          opacity: "0.15 !important",
        },
        "&::after": {
          opacity: "0.15",
        },
      }}
    >
      <Box
        {...props}
        sx={{
          p: 4,
          width: "51%",
        }}
      >
        <Styled.h1>Lorem irure reprehenderit magna nisi sunt.</Styled.h1>
        <Text>
          Est irure Lorem incididunt eiusmod labore dolor eiusmod elit ex
          incididunt. Duis aliqua nulla nulla do ad laborum laboris nulla mollit
          do dolore culpa tempor deserunt. Anim sint aute ut quis cillum
          proident eu laborum.
        </Text>
      </Box>
    </BackgroundImage>
  )
}
