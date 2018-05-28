import React from 'react';
import style from './TodoForm.css'

const Form = (props) => {
	return (
		<form onSubmit={props.onSubmit} className={style.form}>
			<label className='label' htmlFor = {'text'}>Dodaj zadanie :</label>
			<input className='input'
				onChange={props.onChange} 
				id={'text'}
				value={props.input}
				/>
			<button type={'submit'} value='submit'>Dodaj</button>
		</form>
	);
	
}

class TodoForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			input: ''
		}
	}
	
	handleChange(event) {
		let todoValue = event.target.value;
		this.setState({input: todoValue});
	}
	
	handleSubmit(event) {
		event.preventDefault();
		let value = this.state.input;
		this.props.addTodo(value);
	}
	
	render() {
		return (
			<Form onChange={this.handleChange.bind(this)} onSubmit={this.handleSubmit.bind(this)} input={this.state.input}></Form>
		);
	}
}

export default TodoForm;