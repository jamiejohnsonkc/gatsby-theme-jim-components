/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SiteFlexWrapper = (props) => {
	const [navOpen, setNavOpen] = useState(false)

	return (
		<Box
			className='siteWrapper'
			{...props}
			sx={{
				display: 'flex',
				backgroundColor: `${props.siteWrapperBgColor}`,
				flexDirection: `${props.siteWrapperFlexDir}`,
				padding: `${props.siteWrapperPadding}`,
				position: 'relative',
				zIndex: '1',
			}}
		/>
	)
}

SiteFlexWrapper.propTypes = {
	siteWrapperBgColor: PropTypes.string,
	siteWrapperFlexDir: PropTypes.any,
	siteWrapperPadding: PropTypes.any,
}

SiteFlexWrapper.defaultProps = {
	siteWrapperBgColor: 'background',
	siteWrapperFlexDir: 'column',
	siteWrapperPadding: 'none',
}

export default SiteFlexWrapper
