# react基础知识点标记
----------
## 1.创建项目
	利用官方脚手架---create-react-app
	创建：create-react-app Demo
	进入项目： cd Demo
	运行： yarn start

## 2、react
	1、思想：all in js
		js文件可以引入js、index.css等

	2、react响应式框架：
		你不需要关注哪个标签上的操作，而是标签是标签，数据是数据，当进行事件操作时，你只需要关注数据的变化

## 3、jsx语法：
	3.1、在js文件中，写的标签，例如<App/>,<div></div>,不仅包含h5的标签，还可以是自定义的标签，要求自定义标签必须以大写字母开头。所以通常认为标签，小写的为h5的标签，大写的就为自定义的组件。

	3.2、一旦存在jsx语法，那么必须引入 import React from 'react';

	3.3、由于jsx语法，子级标签必须包含在一个父标签里面，当你在页面不想他显示的时候，可以引用react的占位标签Fragment
	<Fragment>...</Fragment>

	3.4、jsx注释
		3.4.1、{/**/}
		3.4.2、注意如果使用//代表注释，则必须按照以下格式，千万不可写在一行，否则误以为变量
			{
			    //
			}

## 4、react的组件与组件之间的传值
	4.1、父组件向子组件传值,通过标签上的属性完成，既可以传递数据，也可以传递方法
		父组件<TodoList />引用<TodoItem />： <TodoItem content={'传递给子组件的内容'}>
		
	4.2、子组件访问父组件的数据或者方法，通过props完成，注意调用父组件的方法时，父组件传递方法的时候就绑定好this
		子组件<TodoItem />接收传值，： this.props.content


	