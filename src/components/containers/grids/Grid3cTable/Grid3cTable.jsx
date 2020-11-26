/** @jsx jsx */
import { jsx, Grid, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import { GoCheck } from 'react-icons/go'
import { GoX } from 'react-icons/go'
// import Icon from '../../../../atoms/Icon'

//TODO deconstruction required

const ColHead = ({ width, padding, grid, ...props }) => (
    <Box
        {...props}
        backgroundColor={props.backgroundColor}
        sx={{
            variant: 'styles.h3',
            py: 3,
            display: 'grid',
            justifyContent: 'center',
            alignContent: 'center',
            marginBottom: 0,
            //   gridArea: "header",
        }}
    />
)

const RowHead = ({ width, padding, grid, color, ...props }) => (
    <Box
        {...props}
        backgroundColor={props.backgroundColor}
        sx={{
            // width: "100%",
            // padding: 0,
            display: 'grid',
            justifyContent: 'start',
            alignContent: 'center',
            paddingLeft: 4,
            paddingTop: 0,
            paddingBottom: 0,
            height: '4em',
        }}
    />
)

const Content = ({ width, padding, grid, ...props }) => (
    <Box
        {...props}
        backgroundColor={props.backgroundColor}
        sx={{
            // width: "100%",
            // padding: 0,
            display: 'grid',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            position: 'relative',
            paddingTop: 0,
            paddingBottom: 0,
            height: '4em',

            //   gridArea: "dataCell",
            //   border: `solid thin white`,
        }}
    />
)

const DataIcon = (props) => (
    <Box
        {...props}
        // iconName={props.iconName}
        sx={{
            color: 'primary',
            height: '1.5em',
            width: '1.5em',
        }}
    >
        {props.children}
    </Box>
)

const Grid3cTable = (props) => (
    <Grid
        columns={[3, '1fr 1fr 1fr']}
        rows={[8, ' 1.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr']}
        gap={0}
        {...props}
        sx={{
            borderRadius: 12,
            boxShadow: 'test5',
        }}
    >
        <ColHead
            {...props}
            sx={{
                justifyContent: 'start',
                paddingLeft: 4,
            }}
        >
            Comparison Point
        </ColHead>
        <ColHead>CDN</ColHead>
        <ColHead>Netlify Edge</ColHead>
        <Grid rows="repeat(7, 64px)" gap={0} sx={{ bg: 'muted' }}>
            <RowHead>Supports static assets</RowHead>
            <RowHead backgroundColor="white">Works without an origin</RowHead>
            <RowHead>Can prerender pages / run builds</RowHead>
            <RowHead backgroundColor="white">Git-integrated CI/CD</RowHead>
            <RowHead>Deploys</RowHead>
            <RowHead backgroundColor="white">Rollbacks</RowHead>
            <RowHead>Cache invalidation</RowHead>
        </Grid>
        <Grid rows="repeat(7, 64px)" gap={0} sx={{ bg: 'muted' }}>
            <Content>
                <DataIcon>
                    <GoCheck />
                </DataIcon>
            </Content>
            <Content backgroundColor="white">
                <DataIcon>
                    <GoX />
                </DataIcon>
            </Content>
            <Content>
                <DataIcon>
                    <GoX />
                </DataIcon>
            </Content>
            <Content backgroundColor="white">
                <DataIcon>
                    <GoX />
                </DataIcon>
            </Content>
            <Content>Manual</Content>
            <Content backgroundColor="white">Manual</Content>
            <Content>Tricky (some risk of stale content)</Content>
        </Grid>
        <Grid rows="repeat(7, 64px)" gap={0} sx={{ bg: 'muted' }}>
            <Content>
                <DataIcon>
                    <GoCheck />
                </DataIcon>
            </Content>
            <Content backgroundColor="white">
                <DataIcon>
                    <GoCheck />
                </DataIcon>
            </Content>
            <Content>
                <DataIcon>
                    <GoCheck />
                </DataIcon>
            </Content>
            <Content backgroundColor="white">
                <DataIcon>
                    <GoCheck />
                </DataIcon>
            </Content>
            <Content>Automatic</Content>
            <Content backgroundColor="white">Automatic</Content>
            <Content>Instant (no risk of stale content)</Content>
        </Grid>
        {/* <Grid rows="repeat(auto-fill, 1fr)" gap={3} sx={{ bg: "muted" }}>
      <Box>Grid 2</Box>
      <Box>Grid 2</Box>
    </Grid> */}
    </Grid>
)

Grid3cTable.propTypes = {}

Grid3cTable.defaultProps = {}

export default Grid3cTable
