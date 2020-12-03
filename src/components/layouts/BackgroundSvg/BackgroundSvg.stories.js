/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import React from "react"
import BackgroundSvg from "./BackgroundSvg"


export default {
  title: "Layout/BackgroundSvg",
}

// const svgArt = css`
//   background-image: url(${gatsbyMonogram});
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: 100%;
//   background-color: #fff;
// `

export const standard = (props) => (
  <div
    {...props}
    sx={{
      height: "20em",
      width: "40em",
      position: "relative",
    }}
  >
    {/* <BackgroundSvg css={svgArt}> */}
    <BackgroundSvg>
      <h1>Howdy</h1>
    </BackgroundSvg>
  </div>
)
