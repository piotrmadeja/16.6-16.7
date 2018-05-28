import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';



const tasks = [{
	id: 1,
	text: 'task1'
}, {
	id: 2,
	text: 'task2'
}, {
	id: 3,
	text: 'task3'
}, {
    id: 4,
    text: 'task4'
},  {
    id: 5,
    text: 'task5'
}];

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: tasks,
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    
    removeToDo(id){
    	const remainder = this.state.data.filter((todo) => todo.id !== id); 
    	this.setState({data: remainder});
    }
    
    render(){
    	return (
    		<div className={style.TodoApp}>
    			<Title title="ToDo App" number={this.state.data.length}></Title>
    			<TodoForm addTodo={this.addTodo.bind(this)} data={this.state.data}></TodoForm>
    			<TodoList items={this.state.data} removeTodo={this.removeToDo.bind(this)}></TodoList>
    		</div>
    	);
    }
}

export default App;