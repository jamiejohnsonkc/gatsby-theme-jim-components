/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import LogoIpsum from '../../../../svg/assets/fpo/logo-1.svg'

const FpoLogo = (props) => (
	<>
		<LogoIpsum
			{...props}
			sx={{
				fill: `${props.logoFill}`,
				width: `${props.logoWidth}`,
			}}
		/>
	</>
)

FpoLogo.propTypes = {
	logoFill: PropTypes.any,
	logoWidth: PropTypes.any,
}

FpoLogo.defaultProps = {
	logoFill: 'primary',
	logoWidth: '100%',
}

export default FpoLogo
