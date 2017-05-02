import React from 'react';
import ListContainer from './list-container';

export default function Board(props) {
	console.log(props);
		const listContainers = [];
		for (let i=0; i<props.listTitles.length; i++) {
				listContainers.push(<ListContainer listTitle={props.listTitles[i]} />);
		}
		return (
				<div className="board">
					<div className="board-title">{props.title}</div>
						{listContainers}
				</div>
		);
}