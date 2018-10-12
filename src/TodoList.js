import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		};
	}

	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value
		});
	}

	handleBtnClick = () => {
		this.setState({
			list: [...this.state.list, this.state.inputValue],
			inputValue: ''
		});
	}

	handleItemDelete(index) {
		let list = [...this.state.list];
		list.splice(index, 1);
		this.setState({
			list: list
		});
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
						onChange={this.handleInputChange.bind(this)}
					/>
					<button onClick={this.handleBtnClick.bind(this)}>提交</button>
				</div>
				<ul>
					{	
						this.state.list.map((item, index) => {
							return (
								<div>
									<TodoItem content={item}
										index={index}
										deleteItem={this.handleItemDelete.bind(this)}/>
								</div>
							)
						})
					}
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