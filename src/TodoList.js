import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = store.getState();
	}

	render() {
		return (
			<div style={{marginTop: 10, marginLeft: 10}}>
				<Input placeholder='todo infor' value={this.state.inputValue} style={{width: 300, marginRight: 10}}/>
				<Button type='primary'>提交</Button>
				<List
					style={{marginTop: 10, width: 300}}
					bordered
					dataSource={this.state.list}
					renderItem={item => (<List.Item>{item}</List.Item>)}
				/>
			</div>
		)
	};
}
export default TodoList;