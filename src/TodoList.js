import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
	}

	componentDidMount() {
		axios.get('/api/todolist').then(
			() => {
				alert('react');
			}
		).catch(() => {
			alert('error');
		});
	}

	handleInputChange(e) {
		const value = e.target.value;
		this.setState(() => ({
			inputValue: value
		}));
	}

	handleBtnClick = () => {
		this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}));
	}

	handleItemDelete(index) {
		this.setState((prevState) => {
			let list = [...prevState.list];
			list.splice(index, 1);
			return {list}
		});
	}

	getTodoItem() {
		return this.state.list.map((item, index) => {
			return (
				<TodoItem
					key={index}
					content={item}
					index={index}
					deleteItem={this.handleItemDelete}/>
			)
		})
	}

	render() {
		return (
			<Fragment>
				<div>
					{
						//label标签加属性htmlFor,htmlFor属性值为输入框的id，那么点击label，光标会聚焦到input标签里
					}
					<label htmlFor={'insertArea'}>输入内容</label>
					<input
						id='insertArea' 
						className='input'
						value={this.state.inputValue} 
						onChange={this.handleInputChange}
					/>
					<button onClick={this.handleBtnClick}>提交</button>
				</div>
				<ul>
					{this.getTodoItem()}
					{/*如果希望输入的h5标签解析，这用属性dangerousSetInnerHTML*/}
					{/*<li key={index}
						onClick={this.handleItemDelete.bind(this, index)}
						dangerouslySetInnerHTML={{__html: item}}>
					</li>*/}
				</ul>
			</Fragment>
		)
	};
}
export default TodoList;