import * as types from './actionTypes';

export const changeInputValue = (value) => ({
	type: types.CHANGE_INPUT_VALUE,
	value: value
})

export const addListItem = () => ({
	type: types.ADD_LIST_ITEM
})

export const removeListItem = (index) => ({
	type: types.REMOVE_LIST_ITEM,
	index: index
})