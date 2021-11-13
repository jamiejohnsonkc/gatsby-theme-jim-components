import PropTypes from 'prop-types'
import useHover from './use-hover'

const HoverRevealBox = (props) => {
	const [hoverRef, isHovered] = useHover()
	return (
		<div ref={hoverRef} style={props.hoverRevealBoxStyle}>
			{isHovered ? props.hoverRevealContent : props.hoverFacingContent}
		</div>
	)
}

HoverRevealBox.propTypes = {}

HoverRevealBox.defaultProps = {}

export default HoverRevealBox
