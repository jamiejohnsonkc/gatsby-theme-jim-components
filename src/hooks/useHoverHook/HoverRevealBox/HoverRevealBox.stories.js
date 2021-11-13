import React from "react"
import HoverRevealBox from "./HoverRevealBox"

export default {
  title: "Hooks/useHover",
}

const hoverRevealBoxStyle = {
  color: "blue",
  padding: "8rem",
  width: "100%",
  textAlign: "center",
  fontSize: "5rem",
}

const RevealContent = () => <div>"😁"</div>

const HoverContent = () => <div>"☹️"</div>

export const standard = (props) => (
  <HoverRevealBox
    hoverRevealBoxStyle={hoverRevealBoxStyle}
    hoverRevealContent={<RevealContent />}
    hoverFacingContent={<HoverContent />}
  />
)
