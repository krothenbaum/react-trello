import React from 'react';

export default function Card(props) {
		const cardText = 'This is a card';
		
		return (
				<div className="card">
						<div className="card-text">{props.cardText}</div>
				</div>
		);
}