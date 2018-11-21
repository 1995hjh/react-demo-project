import {
	CHANGE_INPUT_VALUE,
	ADD_LIST_VALUE,
	DELETE_ITEM_VALUE,
	INIT_LIST_ACTION
} from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
	type: CHANGE_INPUT_VALUE,
	value
})

export const getAddItemAction = () => ({
	type: ADD_LIST_VALUE
})


export const getDeleteItemAction = (index) => ({
	type: DELETE_ITEM_VALUE,
	index
})

export const initListAction = (data) => ({
	type: INIT_LIST_ACTION,
	data
})

export const getTodoList = () => {
	return (dispatch) => {
		axios.get('./list.json').then((res) => {
			const data = res.data;
			const action = initListAction(data);
			dispatch(action);
		});
	}
}