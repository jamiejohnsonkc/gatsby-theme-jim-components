/** @jsx jsx */
import { jsx, Grid, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Grid33_66 = (props) => (
  <Grid columns={[1, "1fr 2fr"]} gap={props.gap}>
    {props.children}
  </Grid>
)

Grid33_66.propTypes = {}

Grid33_66.defaultProps = {}

export default Grid33_66

//TODO go back and understand how to apply props at the primitive level to enable customization at the production stage
