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
		// let lists =[];
		// for(let i=0; i<this.props.listTitle.length; i++) {
		// 	lists.push(<List cards={this.state.cardsArr} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit} title={this.props.listTitle[i]} />);
		// }
		// return (<div className='list'>{lists}</div>);
		return (<List cards={this.state.cardsArr} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit} title={this.props.listTitle} />);
	}
}
