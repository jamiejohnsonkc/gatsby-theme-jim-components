/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import React from 'react'
// import Icon from '../../../atoms/icons/Icon'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { MdFormatQuote } from 'react-icons/md'
//TODO deconstruct

const StyledSpan = styled(span)``

const BlockQuote = ({ endorser, endorsement, ...props }) => (
	<Box>
		<Box
			{...props}
			sx={{
				borderStyle: 'solid',
				borderWidth: '.5em',
				width: '6em',
				height: '6em',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				borderColor: 'accent',
			}}
		>
			<Box
				{...props}
				sx={{
					height: '4em',
					width: '4em',
					verticalAlign: 'sub',
					margin: '0em',
				}}
			>
				<MdFormatQuote />
			</Box>
		</Box>
		<Text
			as='div'
			{...props}
			sx={{
				variant: 'text.display',
				fontSize: 3,
				lineHeight: 'body',
				paddingLeft: 4,
				paddingTop: 4,
			}}
		>
			{endorsement}
		</Text>
		<Text
			sx={{
				marginTop: 4,
			}}
		>
			<StyledSpan
				sx={{
					variant: 'text.display',
					fontSize: '150%',
					paddingLeft: 4,
					fontWeight: 600,
				}}
			>
				{endorser}
			</StyledSpan>
		</Text>
	</Box>
)

BlockQuote.propTypes = {
	endorsement: PropTypes.any,
	endorser: PropTypes.any,
}

BlockQuote.defaultProps = {
	endorsement:
		',Cillum proident qui tempor labore do ex veniam cillum aute pariatur et isi. Commodo eu aliquip non reprehenderit irure dolor qui Lorem proident ullamco. Voluptate officia dolor elit nostrud irure ut commodo. Velit amet excepteur cupidatat minim anim nisi aborum do dolor. Occaecat minim voluptate sunt deserunt in tempor aliqua nulla.',
	endorser: '	John Doe &#8212; VP Marketing',
}

export default BlockQuote
