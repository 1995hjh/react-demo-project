import {CHANGE_INPUT_VALUE, ADD_LIST_VALUE, DELETE_ITEM_VALUE} from './actionTypes';
const defaultState = {
    inputValue: '',
    list: []
};

//reducer可以接收state，但是绝不能修改state
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if (action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.value;
    } else if (action.type === ADD_LIST_VALUE) {
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
    } else if (action.type === DELETE_ITEM_VALUE) {
        newState.list.splice(action.index, 1);
    }
    return newState;
}