import React from "react"
import FlexBlock from "./FlexBlock"
import FlexItemContent from "./FlexItemContent"

export default {
  title: "Layout Elements/FlexBlocks/Single",
}

export const standard = () => (
  <FlexBlock
    flexItemContent={
      <FlexItemContent>
        <p>
          Cupidatat exercitation fugiat incididunt nisi nulla reprehenderit
          consectetur sunt veniam voluptate pariatur ipsum minim ut. Proident
          nulla deserunt in eu qui. Commodo voluptate pariatur laborum magna
          veniam sint elit magna aute sit mollit non sunt nulla. Et fugiat aute
          eu eu Lorem ipsum deserunt non anim.
        </p>
      </FlexItemContent>
    }
  />
)
