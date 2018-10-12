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

    render() {
        const {
            content,
            index,
            text
        } = this.props;
        return (
            <div onClick={this.handleClick}
                key={index}>
                {text}-{content}
            </div>
        )
    }
}

TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number,
    text: PropTypes.string.isRequired
}

TodoItem.defaultProps = {
    text: 'hello world'
};

export default TodoItem;