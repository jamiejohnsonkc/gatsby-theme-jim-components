/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { Component } from 'react'
import './ToggleSwitch.css'

/*
Toggle Switch Component
Note: id is required for ToggleSwitch component to function. Name, currentValue, defaultChecked, Small and onChange're optional.
Usage: <ToggleSwitch id="id" onChange={function (e) { console.log("Checkbox Current State: " + e.target.checked); }} />
*/

class ToggleSwitch extends Component {
	state = {
		checked: this.props.defaultChecked,
	}
	onChange = (e) => {
		this.setState({
			checked: e.target.checked,
		})
		if (typeof this.props.onChange === 'function') this.props.onChange()
	}
	render() {
		return (
			<Box
				className={'toggle-switch' + (this.props.Small ? ' small-switch' : '')}
			>
				<input
					type='checkbox'
					name={this.props.Name}
					className='toggle-switch-checkbox'
					id={this.props.id}
					checked={this.props.currentValue}
					defaultChecked={this.props.defaultChecked}
					onChange={this.onChange}
					disabled={this.props.disabled}
				/>
				{this.props.id ? (
					<label className='toggle-switch-label' htmlFor={this.props.id}>
						<span
							className={
								this.props.disabled
									? 'toggle-switch-inner toggle-switch-disabled'
									: 'toggle-switch-inner'
							}
							data-yes={this.props.Text[0]}
							data-no={this.props.Text[1]}
						/>
						<span
							className={
								this.props.disabled
									? 'toggle-switch-switch toggle-switch-disabled'
									: 'toggle-switch-switch'
							}
						/>
					</label>
				) : null}
			</Box>
		)
	}
	//Set text for rendering.
	// static defaultProps = {
	//   Text: ["Yes", "No"],
	// }
}

ToggleSwitch.propTypes = {}

ToggleSwitch.defaultProps = {}

export default ToggleSwitch
