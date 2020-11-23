/** @jsx jsx */
import { jsx, Box, Grid } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Grid66_33 = (props) => (
  <Grid columns={[2, "2fr 1fr"]}>
    <Box display="grid">{props.contentWide}</Box>
    <Box display="grid">{props.contentNarrow}</Box>
  </Grid>
)

Grid66_33.propTypes = {
  // displayText: PropTypes.any,
  // headerText: PropTypes.any,
  // subheadText: PropTypes.any,
  // visual: PropTypes.any,
}

Grid66_33.defaultProps = {}

export default Grid66_33
