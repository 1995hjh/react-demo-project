import {CHANGE_INPUT_VALUE, ADD_LIST_VALUE, DELETE_ITEM_VALUE} from './actionTypes';

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