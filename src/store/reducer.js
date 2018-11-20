const defaultState = {
    inputValue: '',
    list: []
};

//reducer可以接收state，但是绝不能修改state
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if (action.type === 'change_input_value') {
        newState.inputValue = action.value;
    } else if (action.type === 'add_list_value') {
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
    } else if (action.type === 'delete_item_value') {
        newState.list.splice(action.value, 1);
    }
    return newState;
}