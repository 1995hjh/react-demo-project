import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import * as actions from './store/actionCreators';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		store.subscribe(this.handleStoreChange);
	}

	handleInputChange (e) {
		const action = actions.getInputChangeAction(e.target.value);
		store.dispatch(action);
	}

	handleStoreChange() {
		this.setState(store.getState());
	}

	handleBtnClick() {
		const action = actions.getAddItemAction();
		store.dispatch(action);
	}

	handleItemClick(index) {
		const action = actions.getDeleteItemAction(index);
		store.dispatch(action);
	}

	render() {
		return (
			<div style={{marginTop: 10, marginLeft: 10}}>
				<Input placeholder='todo infor'
					value={this.state.inputValue}
					style={{width: 300, marginRight: 10}}
					onChange={this.handleInputChange}/>
				<Button type='primary' onClick={this.handleBtnClick}>提交</Button>
				<List
					style={{marginTop: 10, width: 300}}
					bordered
					dataSource={this.state.list}
					renderItem={(item, index) => (<List.Item onClick={this.handleItemClick.bind(this, index)}>{item}</List.Item>)}
				/>
			</div>
		)
	};
}
export default TodoList;