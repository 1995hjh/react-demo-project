import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';


const TodoListUI = (props) => {
     const {
        inputValue,
        handleInputChange,
        handleBtnClick,
        list,
        handleItemClick
    } = props;

    return (
        <div style={{marginTop: 10, marginLeft: 10}}>
            <Input placeholder='todo infor'
                value={inputValue}
                style={{width: 300, marginRight: 10}}
                onChange={handleInputChange}/>
            <Button type='primary' onClick={handleBtnClick}>提交</Button>
            <List
                style={{marginTop: 10, width: 300}}
                bordered
                dataSource={list}
                renderItem={(item, index) => (<List.Item onClick={(index) => {handleItemClick(index)}}>{item}</List.Item>)}
            />
        </div>
    );
}

export default TodoListUI;