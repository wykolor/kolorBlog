# 就不信搞不定 this

**前言**

对于 this 的理解以及 this 的指向问题，有过面试经验的小伙伴应该都知道这是前端面试中经常被问到的问题，我也不例外。如果没有彻底搞清楚 this，很容易就在这个问题上面吞吞吐吐，甚至面试官多问一点，就没法继续回答。在缺乏清晰认知的情况下，this 对我们来说就完全像一种魔法的存在。

> 任何足够先进的技术都和魔法无异。
>
> ------Arthur C.Clarke

所以今天我们就来看看 this 到底在散发什么*黑魔法*。

this 关键字是 JavaScript 中最复杂的机制之一。它是一个很特别的关键字，被自动定义在所有函数的*作用域*中。

## 为什么要使用 this

既然 this 在使用过程中会给我们带来那么多的困扰，我们还值得花时间去学习它吗？它的应用场景又是哪些呢？所以，在使用之前我们还是得去搞明白为什么要用 this。

话不多说，先看代码

```JavaScript
    function identify(){
        return this.name;
    }

    function say(){
        var greeting = "hello,i'm " + indetify.call(this);
        console.log(greeting);
    }

    var me = {
        name:"Kolor"
    }

    var you = {
        name = "Chenyu"
    }

    indetify().call(me); // Kolor
    indetify().call(you); // Chenyu

    say().call(me); // hello,i'm Kolor
    say().call(you); // hello,i'm Chenyu
```

相信有 JavaScript 基础的伙伴看懂这段代码并不难，没看懂的也不用担心，我们这就来讲解下：

可以看出，这段代码可以在不同的上下文对象（me 和 you）中重复使用函数 identity()和 say()，不用针对每个对象编写不同版本的函数。

这里就是利用了 this 的方便，想象一下，如果不使用 this，那就需要给 identity()和 say()显示的传入一个上下文对象（函数传参）。

也不要想象了，还是我们直接上代码给大家看吧，毕竟咱们不能用意念敲代码(\*￣︶￣)

```JavaScript
function indetify(context){
    return context.name;
}

function say(context){
    var greeting = "hello,i'm " + indetify(context);
    console.log(greeting);
}

indetify(you); // Chenyu
say(me);  // hello,i'm Kolor
```

可想而知，随着我们使用的模式越来越复杂，显示的传递上下文对象的话会让代码变得越来越混乱，难以维护和理解。使用 this 的话就不会这样，它提供一种更加优雅的的方式来隐式的“传递”一个对象引用，将 API 设计的更加简洁且易于复用。

## 对 this 的误解

我们在搞清楚 this 是怎么工作之前，先来消除下关于 this 的错误认知，经常我们太关注于“this”的字面意思而导致产生一些误解，有两种常见的对于 this 的解释都是错误的

### 1. 指向自身



### 2. 指向函数的作用域

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
