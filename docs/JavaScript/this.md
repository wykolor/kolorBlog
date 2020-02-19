# this

> ES5 中 this 场景场景

1. 预编译过程中 this---->window
2. 全局作用域 this---->window
3. call/apply 可以改变函数执行时的 this 指向
4. obj.func() this 指向 obj
5. var obj = new Function this 在构造函数的时候 this 指向新创建的实例

> 练习题

**第 01 题**.下面代码的输出结果是什么？（请用大脑推断，不要借助控制台来运行，下同）

```JavaScript
var name = "222";
var a = {
    name : "111",
    say : function () {
        console.log(this.name);
    }
}
var fun = a.say;
fun();
a.say();
var b = {
    name : "333",
    say : function (fun) {
        fun();
    }
}
b.say(a.say);
b.say = a.say;
b.say();
```

**第 02 题**.下面代码的输出结果是什么？（请用大脑推断，不要借助控制台来运行，下同）

```JavaScript
var foo = 123;
function print(){
    this.foo = 345;
    console.log(foo);
}
print();
```

**第 03 题**.下面代码的输出结果是什么？（请用大脑推断，不要借助控制台来运行，下同）

```JavaScript
var foo = 123;
function print(){
    this.foo = 345;
    console.log(foo);
}
new print();
```

**第 04 题**.下面代码的输出结果是什么？（请用大脑推断，不要借助控制台来运行，下同）

```JavaScript
var foo = "123";
function print(){
    var foo = "345";
    this.foo = "789";
    console.log(foo);
}
print();
```

**第 05 题**.运行 test 和 new test 之后下面的函数分别打印什么？

```JavaScript
var a = 5;
function test(){
    a = 0 ;
    alert(a);
    alert(this.a);
    var a;
    alert(a);
}
test();
new test();
```

**第 06 题**.下面代码的输出结果是什么？

```JavaScript
var bar = {a : "002"};
function print(){
    bar.a = "a";
    Object.prototype.b = "b";
    return function inner(){
        console.log(bar.a);
        console.log(bar.b);
    }
}
print()();

```

**第 07 题**. 找出一个字符串中第一个只出现一次的字符

```JavaScript

```
