import React from 'react';
import {
	connect
} from 'react-redux';
import * as actions from './store/actionCreator';

const TodoList = (props) => {

	const {
		inputValue,
		inputChangeValue,
		handleClick,
		list,
		handleItemClick
	} = props;

	return (
		<div>
			<div>
				<input value={inputValue} onChange={inputChangeValue}/>
				<button onClick={handleClick}>提交</button>
			</div>
			<ul>
				{
					list.map((item, index) => {
						return (<li onClick={() => {handleItemClick(index)}} key={index}>{item}</li>);
					})
				}
			</ul>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}

//store.dispatch, props
const mapDispatchToProps = (dispatch) => {
	return {
		inputChangeValue(e) {
			const action = actions.changeInputValue(e.target.value);
			dispatch(action);
		},
		handleClick() {
			const action = actions.addListItem();
			dispatch(action);
		},
		handleItemClick(index) {
			const action = actions.removeListItem(index);
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);