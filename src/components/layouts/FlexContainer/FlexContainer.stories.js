/** @jsx jsx */
import { jsx } from 'theme-ui'
import TextLink from '../../presentation/TextLink'
import FlexItem from '../FlexItem'
import FlexContainer from './FlexContainer'

export default {
    title: 'FlexContainer',
    component: FlexContainer,
    argTypes: {
        flexContainerVariant: {
            name: 'flexDirection',
            control: {
                type: 'select',
                options: {
                    column_static: 'flex.column',
                    row_static: 'flex.row',
                    columnRow_resp: 'flex.columnRow',
                    rowColumn_resp: 'flex.rowColumn',
                },
            },
        },
    },
    subcomponents: { FlexItem, TextLink },
}

export const Mono = (args) => (
    <FlexContainer {...args}>
        <FlexItem>
            <TextLink />
        </FlexItem>
    </FlexContainer>
)

export const Duo = (args) => (
    <FlexContainer {...args}>
        <FlexItem>
            <TextLink />
        </FlexItem>
        <FlexItem>
            <TextLink />
        </FlexItem>
    </FlexContainer>
)

export const Trio = (args) => (
    <FlexContainer {...args}>
        <FlexItem>
            <TextLink />
        </FlexItem>
        <FlexItem>
            <TextLink />
        </FlexItem>
        <FlexItem>
            <TextLink />
        </FlexItem>
    </FlexContainer>
)

// export const Mono = (args) => (
//     <FlexContainer>
//         <FlexItem>
//             <TextLink />
//         </FlexItem>
//     </FlexContainer>
// )

// export const Duo = (args) => (
//     <FlexContainer>
//         <FlexItem>
//             <TextLink />
//         </FlexItem>
//         <FlexItem>
//             <TextLink />
//         </FlexItem>
//     </FlexContainer>
// )
