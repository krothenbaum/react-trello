import React from 'react';
import Card from './card';

export default function List(props) {
	const cardsArr = [];
	for(let i=0; i <props.cards.length; i++) {
		cardsArr.push(<Card cardText={props.cards[i]} />);
	}
	return (
		<div className='card-list'>
			<div className="list-title">{props.title}</div>
				{cardsArr}
			<form>
				<input type="text" onChange={props.onAddInputChanged} />
				<button type="button" onClick={props.onAddSubmit}>Submit</button>
			</form>
		</div>
	);
}