var arr=[];
for(var i=1;i<100;i++)
{
    arr[i-1]=i;
}
var obj={
    username: 'lzy',
    phone: '18647791216',
    email: '1753856457@qq.com',
    sex: 1,
    helloword: function(){
        console.log('hello world');
    }
    
}//对象创建语法格式


function People(username,uage,usex) {//构造函数名称首字母大写，约定
    this.name=username;
    this.age=uage;
    this.sex=usex;
}
var lzy=new People('lizhiyuan',18,'男');//使用new 关键字来创建对象
console.log(typeof lzy);
for(let i=10;i>0;i--)
{
    var starstr='';
    for(let j=1;j<i;j++)
    {
        starstr+='❤'
    }
    if(i==1)
    {
        break;
    }
    console.log(starstr);
}