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

	2、react框架的特点：
		2.1、react响应式框架，声明式开发：
			你不需要关注哪个标签上的操作，而是标签是标签，数据是数据，当进行事件操作时，你只需要关注数据的变化

		2.2、react框架可以与其他框架并存，因为他是通过组件挂载在某一个dom对象上，不会影响其他dom对象，所以可以与jquery等其他框架一起使用

		2.3、组件化

		2.4、单向数据流
			父组件可以向子组件传值，但是子组件只能使用父组件的值，不能在子组件内修改父组件的值
			子组件需要修改父组件的数据时，只能从父组件传递父组件的方法给子组件，原则上还是父组件通过自己的方法操作父组件的数据
		
		2.5、视图层框架
			因为复杂应用多层组件之间数据操作处理起来很麻烦，比如c是b的子组件，b是a的子组件，d是a的子组件，这时候如果c要处理d里面的数据，只能c->b->a一层层的向上传递，造成冗余，因此react自身只是定义为视图层框架，在大型项目中需要结合一些redux等数据层框架一起使用

		2.6、函数式编程
			代码清晰，各司其职；便于前端自动化测试

	3、渲染原理：
	当state或者props发生改变的时候，render就会重新渲染，渲染机制：
		1、state数据；
		2、JSX模板；
		3、数据 + 模板 结合 生成虚拟的DOM(虚拟dom就是一个js对象，用它来描述真实的dom)；//用js生成一个js对象，性能损耗较小，而生成dom对象损耗较大
		4、用虚拟的DOM生成真实的dom对象来显示；
		5、state发生变化；//props底层也是state发生变化
		6、数据 + 模板 生成新的虚拟DOM；//极大的提高了性能
		7、比较原始虚拟DOM和新的虚拟DOM的区别；//极大的提高了性能，比较的算法称为diff算法
		8、直接操作DOM，改变相应的内容；

	渲染机制优点：
		1.提升性能；
		2.使得跨端应用得以实现；

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

## 5、优化代码，代码规范的几点
	5.1、this.handleItemDelete = this.handleItemDelete.bind(this);
	声明在构造函数constructor()中，后面的代码直接调用this.handleItemDelete

	5.2、更新state值
	不是直接赋值，而是采用() => {return ...}函数的形式；
	() => {return ...} 简写为 () => ({}),大括号外面的()代表return；
	所以综合为：
	const value = e.target.value; //注意，当设置变量不能识别时，需要将变量在外面先赋值在使用
	this.setState((prevState) => ({})); //接收一个参数prevState，代表state原本存储的内容
	this.setState((prevState) => ({
		inputValue: value,
		list: [...prevState.list, prevState.inputValue]
	}));




	