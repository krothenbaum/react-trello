import React from 'react';
import List from './list';

export default class ListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			cardsArr: []
		};
		this.onAddSubmit = this.onAddSubmit.bind(this);
		this.onAddInputChanged = this.onAddInputChanged.bind(this);
	}

	onAddSubmit(e) {
		e.preventDefault();
		const newArray = this.state.cardsArr.slice();
		newArray.push(this.state.text);
		this.setState({cardsArr: newArray});
	}

	onAddInputChanged(e) {
		this.setState({text: e.target.value});
	}

	render() {
		return (<List cards={this.state.cardsArr} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit} title={this.props.listTitle} />);
	}
}
