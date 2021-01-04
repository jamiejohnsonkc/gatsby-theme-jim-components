/** @jsx jsx */
import { jsx } from 'theme-ui'
import Body from './Body'

export default {
    title: 'Components/Typography',
    component: Body,
    argTypes: {
        variant: {
            name: 'size',
            control: {
                type: 'select',
                options: {
                    large: 'styles.b1',
                    medium: 'styles.b2',
                    small: 'styles.b3',
                },
            },
        },
        fontWeight: {
            name: 'weight',
            control: {
                type: 'select',
                options: {
                    heavy: 'heavy',
                    bold: 'bold',
                    regular: 'regular',
                    light: 'light',
                },
            },
        },
        fontFamily: {
            control: {
                type: 'select',
                options: {
                    body: 'body',
                    heading: 'heading',
                    mono: 'mono',
                }
            }
        }
    },
}

export const BodyStory = (args) => <Body {...args} />

BodyStory.storyName = 'Body'
