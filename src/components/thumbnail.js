import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './thumbnail.css';

export default class Thumbnail extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const sizing = {
			width: this.props.width,
			height: this.props.height
		}

		return (
			<a target="_blank" href={this.props.image}>
				<img class="thumbnail" src={this.props.image} alt={this.props.alttext} style={sizing}/>
			</a>
		);
	}
}

Thumbnail.propTypes = {
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	alttext: PropTypes.string.isRequired
}
