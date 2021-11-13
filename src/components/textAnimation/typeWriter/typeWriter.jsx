/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import typeWriter from './typeWriter'

{
    /* <style>
#container {
	text-align: center;
}

#text {
	display: inline-block;
	vertical-align: middle;
	color: orange;
	letter-spacing: 2px;
}

#cursor {
	display: inline-block;
	vertical-align: middle;
	width: 3px;
	height: 14px;
	background-color: orange;
	animation: blink .75s step-end infinite;
}

@keyframes blink {
	from, to { 
		background-color: transparent 
	}
	50% { 
		background-color: orange; 
	}
}
</style> */
}

const typeWriter = (props) => (
    <>
        <div style="display: inline-block; vertical-align: middle;">I make</div>
        <div id="text"></div>
        <div id="cursor"></div>
    </>
)

typeWriter.propTypes = {}

typeWriter.defaultProps = {}

export default typeWriter
