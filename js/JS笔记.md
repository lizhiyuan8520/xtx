# 												JS笔记

## 一、JS基础特性与语法

### 		1.1 语言特点

​			1.运行在客户端的弱类型脚本语言

​			2.不需要编译，运行过程中由js解释器（js引擎）进行逐行解释执行 (预解析->代码执行)

			### 		1.2 引入方法

​			1.行内式 	2.内嵌式 	3.外部引入

~~~ js
<link rel="stylesheet" href="./css/index.css">
~~~



				### 		1.3 常见输入输出方式

~~~ js
prompt("这是一个输入框");
alert("这是一个弹出警示框");
console.log("这是输出到控制台的");
~~~



	### 		1.4 JS组成

​			1.ECMAScript（JS语法）（ES5/61）	2.DOM (页面文档对象模型)	3.BOM(.浏览器对象模型)

	### 		1.5 变量

​			1.变量声明

​				var （函数作用域） let（块级作用域）

​				var可以重复声明相同的变量，后者会覆盖前者，let不能声明相同的变量

​				块级作用域是指用{}包含的区域，常见的有 for，while，if

​			2.尽量不要使用 name 作为变量名，在某些浏览器中有特殊含义

	### 		1.6  数据类型

​			1.动态弱类型语言，根据右边的数据来确定数据类型

​			2.分类  简单数据类型（Number，String，Boolean，Undefined，Null）复杂数据类型（object）

<img src="C:\Users\17538\AppData\Roaming\Typora\typora-user-images\image-20210817111424618.png" alt="image-20210817111424618" style="zoom:80%;" />

​			（1）Number

​						1-1 数字型，包括整型和浮点型，默认值为0

​						1-2 八进制 前面加 0 十六进制 前面加 0x

​						1-3 数值中的最大值 Number.MAX_VALUE 1.7979931348623157e+308   

​							  数值中的最小值 Number.MAX_VALUE 5e-324

​							  infinity  代表无穷大    -infinity  代表无穷小    NaN 非数值    isNaN() 用来判断是否为数字 

​				（2）String

​						2-1 单引号和双引号都可用于声明，声明带引号的数据，可以使用外双内单，外单内双都可

​						2-2 字符串转义字符 \n 换行 \t 缩进  \b 空格

​						2-3 length 字符串属性，代表字符串长度 如 str.length  

​						2-4 字符串拼接 字符串拼接，只要拼接中的数据类型有一个是字符串，结果就是字符串

​				（3）Boolean

​						3-1 参与加号运算中时，true当数字 1 来使用，false当数字 0 来使用

​				3.使用 typeof 关键字来判断数据类型 用法 typeof +变量名

​				4.数据类型转换

​						（1） 转换为字符串

​								变量.toString（） 			String（变量）强制转换			加号拼接字符串

​						（2）  转换为数字型

​								parseInt（String）将String转换为整型	parseInt（120px） 会保留数字 去掉单位 能取前面的数字

​								parseFloat（String）将String转换为浮点型

​								Number（）强制转换函数

​								隐式转换 - * / 都可以转换为数字型 如 console.log('123' - '120') 结果为 3

​						（3） 转化为布尔型

​								Boolean（x）当x为 ‘ ’ undefined null 0 NaN 时 输出结果都为false

### 			1.7运算符

​					1.算数运算符 + - * / %   注意:浮点型数值在进行算数运算符的时候会有精度的问题

​					2.比较运算符

​						注意点：== 会默认转换数据类型，会把字符串型的数据转换为数字型 18=‘18’ 返回为true

​									  === 全等会要求左右两边数据类型和值一样才行 18=‘18’  返回为false

​					3.逻辑运算符

​						 && 逻辑与  || 逻辑或  ！逻辑非

​						 逻辑短路 如果左边条件值已经可以确定结果，则不继续右边条件的判断

​						 &&:如果表达式1为真，则返回表达式2，如果表达式1为假，则返回表达式1

​						 ||：如果表达式1为真，则返回表达式1，如果表达式1为假，则返回表达式1

	###  		 		1.8 流程控制

​					1.顺序流程控制： 从上向下 逐行执行

​					2.分支控制：

​					   （1）根据不同的条件，执行不同的路径代码（多选一）if else  

​					   （2）三元表达式 ：条件表达式? 表达式1：表达式2，若为真，返回表达式1，反之返回表达式2

​					   （3）switch(表达式) 

~~~js
switch(表达式) {
    case value1:
        执行语句1;
        break;
    case value2:
        执行语句2;
        break;
        ...
        default:
        	执行默认的语句;
        //匹配过程相当于全等 ===
        //没有break就不会跳出，一直向下顺序执行
}
~~~

​			3.循环控制

~~~js
for(let i=1;i<=100;i++)
    {
        //循环体
        //推荐使用let初始化变量，作用域只在块级中
    }
while(条件表达式){
    //循环体
}
 do {
     //先执行一遍循环体
 }  while(条件表达式) 
~~~

### 			1.9  数组

​			1.创建数组

​					（1）利用 new 创建数组

~~~js
var arr=new Array(); //创建一个空的数组
~~~

​					（2）利用数组字面量创建数组

~~~ js
var arr = []; // 创建一个空的数组
var arr = ['1',2,true,'4',null] // 数组里可以存放任意数据类型,arr.length 数组长度
~~~



​			2.数组扩容

​					（1）直接修改数组长度，多出来的元素位置由undefined来代替

​					（2）通过增加索引号来直接追加元素

		### 			1.10  函数

​			1.函数声明

~~~ js
function sum(){
    // 需要反复执行的代码块儿
}
var sum = function(){ // 需要反复执行的代码块儿}  // 匿名函数
~~~

​			2.函数参数

~~~ js
function sum(形参1,形参2, ...){
    // 形参可看做是没有值的变量,默认为undefined
    // 如果实参多余形参的个数，以形参为准，形参n个，就取前n个实参，其他用undefined代替
    // 函数内置对象arguments存储了传递的所有实参
    console.log(arguments) //实参伪数组 （具有数组的length 按照索引方式存取 没有真正数组的一些方法 如pop（）push（）等 ）
}
sum(实参1，实参2,...);// 函数调用
~~~

​			3.函数返回值

​			   （1）return 之后的代码不会被执行

​			   （2）return 只会返回一个值，如果有多个值，那么取最后一个

​			   （3）如果函数没有 return，则函数的返回值为undefined

### 			1.11 作用域

​				1.全局作用域

​					是指整个script 标签 或者是一个单独的JS文件

​				2.局部作用域

​					只在函数内部起作用和效果，函数的形参也属于局部变量

​				**注意点1:如果在函数内部没有声明直接赋值的变量也是属于全局变量的**

​				**注点意2：全局变量只有在浏览器关闭的时候才会销毁，占用内存资源，局部变量程序执行完毕就会被销毁**

​				3.作用域链

​					 内部函数访问外部函数的变量，采用的是链式查找的方式来决定取哪个值（就近原则）

~~~ js
var num=10;
function fn(){
    var num=20;
    function fun(){
        console.log(num);//结果为 20
    }
}
~~~

### 			1.12 预解析

​					1.js引擎执行顺序

​						预解析->代码执行

​					2.预解析（变量预解析和函数预解析）

​						（1）js引擎会把js 里面所有的 var 还有 function 提升到当前作用域的最前面

​						（2）**变量预解析把变量声明提升到当前作用域的最前面，不进行赋值操作**

​						（3）**函数预解析把函数声明提升到当前作用域的最前面**（注意函数表达式）

### 			1.13 JS对象

​					1.对象创建

~~~ js
var obj={
    username: 'lzy',
    phone: '18647791216',
    email: '1753856457@qq.com',
    sex: 1,
    helloword: function(){
        console.log('hello world');
    }
var obj= new Object();//创建一个空对象
    
}//对象创建语法格式
console.log(obj.username);
console.log(obj['phone']);
obj.helloworld();//调用方法
~~~

​				2.构造函数

~~~ js
function People(username,uage,usex) {//构造函数名称首字母大写，约定，像java里的类，泛指
    this.name=username;
    this.age=uage;// this 指向内存中新建的对象
    this.sex=usex;
    this.sayHi= function(){
        console.log("hello world")
    }
}
var lzy=new People('lizhiyuan',18,'男');//使用new 关键字来创建对象
console.log(typeof lzy);
lzy.sayHi();
~~~

​			3.遍历对象

~~~ js
for(var key in lzy) {
    console.log(key) //输出属性名
    console.log(lzy[key])//输出属性值
}
~~~

​		4.内置对象

​			(1)	查阅[MDN网站](https://developer.mozilla.org/zh-CN/)来获取api信息

​		  （2）Math（数学对象，有数学常量和常见计算方法）

~~~js
//常见方法与属性
Math.PI//圆周率
Math.floor//向下取整
Math.ceil()//向上取整
Math.round()//四舍五入 就近取整
Math.abs()//绝对值
Math.max()/Math.MIN()//最大值与最小值
~~~







​				

​				











​												

​					





​	





