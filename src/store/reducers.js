import * as types from './actionTypes';

const defaultState = {
	inputValue: '',
	list: []
};

export default (state = defaultState, action) => {
	const newState = JSON.parse(JSON.stringify(state));
	if (action.type === types.CHANGE_INPUT_VALUE) {
		newState.inputValue = action.value;
	} else if (action.type === types.ADD_LIST_ITEM) {
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
	} else if (action.type === types.REMOVE_LIST_ITEM) {
		newState.list.splice(action.index, 1);
	}
	return newState;
}