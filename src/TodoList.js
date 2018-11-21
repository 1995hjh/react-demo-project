import React, {
	Component
} from 'react';
import store from './store';
import * as actions from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemClick = this.handleItemClick.bind(this);
		store.subscribe(this.handleStoreChange);
	}

	componentDidMount() {
		const action = actions.getInitAction();
		store.dispatch(action);
	}

	handleInputChange(e) {
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
		const {
			inputValue,
			list
		} = this.state;
		return (
			<TodoListUI
				inputValue={inputValue}
				list={list}
				handleInputChange={this.handleInputChange}
				handleBtnClick={this.handleBtnClick}
				handleItemClick={this.handleItemClick}
			/>
		)
	};
}
export default TodoList;