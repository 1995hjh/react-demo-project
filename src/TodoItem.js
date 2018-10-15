import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const {
            deleteItem,
            index
        } = this.props;
        deleteItem(index);
    }

    //当父组件被更新时，子组件不需要被更新时，则使用shouldComponentUpdate,提升性能
    shouldComponentUpdate(nextProps, nextState){
        if (nextProps.content !== this.props.content) {
            return true;
        }
        return false;
    }

    render() {
        const {
            content
        } = this.props;
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }
}

TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number,
    /*text: PropTypes.string.isRequired*/
}
/*
TodoItem.defaultProps = {
    text: 'hello world'
};
*/

export default TodoItem;