/** @jsx jsx */
import { jsx, Grid, Box, Text, Container } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import IconsBar from '../../presentation/IconsBar/IconsBar'

const IconsBarStyle = {
    verticalAlign: 'middle',
}

const FooterHead = (props) => (
    <Text
        sx={{
            variant: 'text.display.d1',
            marginBottom: 2,
        }}
    >
        {props.children}
    </Text>
)

// const FooterBox = (props) => <Box>{props.children}</Box>

const FooterTall = (props) => (
    <footer>
        <Container py={[2, 5]}>
            <Grid gap={0} columns={[1, 1, '1fr 1fr 2fr']}>
                <Box>
                    <FooterHead>Explore</FooterHead>

                    <Text
                        {...props}
                        sx={{
                            py: 1,
                        }}
                    >
                        Lorem
                    </Text>
                    <Text
                        {...props}
                        sx={{
                            py: 1,
                        }}
                    >
                        Ipsum
                    </Text>
                    <Text
                        {...props}
                        sx={{
                            py: 1,
                        }}
                    >
                        Dolemet
                    </Text>
                    <Text
                        {...props}
                        sx={{
                            py: 1,
                        }}
                    >
                        Ascriti
                    </Text>
                </Box>
                <Box>
                    <FooterHead>Contact</FooterHead>

                    <Text
                        {...props}
                        sx={{
                            py: 1,
                        }}
                    >
                        <span>Lorem Ipsum</span>
                        <br />
                        <span>(555)525-5555</span>
                        <br />
                        <span>lorem@solodiamo.com</span>
                    </Text>
                </Box>
                <Box>
                    <FooterHead>About Us</FooterHead>
                    <Text
                        {...props}
                        sx={{
                            py: 1,
                            lineHeight: 2,
                            marginBottom: 2,
                        }}
                    >
                        Sunt laboris mollit pariatur in enim incididunt aliquip
                        sit pariatur. Ex et sunt velit anim sit cillum aliqua
                        qui mollit amet occaecat qui non. Aliquip duis minim
                        amet eiusmod duis sint. Mollit ad duis consectetur
                        mollit irure laboris. Excepteur consequat esse fugiat
                        consequat nisi. Non esse irure anim minim. Deserunt non
                        aliquip irure nostrud deserunt nulla deserunt.
                    </Text>
                    <IconsBar
                        sx={{
                            width: [null, 4],
                        }}
                        IconsBarStyle={IconsBarStyle}
                    />
                </Box>
            </Grid>
        </Container>
    </footer>
)

FooterTall.propTypes = {}

FooterTall.defaultProps = {}

export default FooterTall
