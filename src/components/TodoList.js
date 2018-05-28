import React from 'react';
import Todo from './Todo';
import style from './TodoList.css';

class TodoList extends React.Component{
	constructor(props){
		super(props);
	}
	
	get items() {
		return this.props.items.map(todo => <Todo key={todo.id} todo={todo} remove={this.props.removeTodo}/>)
	}
	
	render() {
		return (
			<ul className={style.list}>
				{this.items}
			</ul>
		);
	} 
}

export default TodoList;