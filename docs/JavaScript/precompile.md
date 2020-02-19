# 预编译

> js 运行三部曲

```
    1. 语法分析：全篇扫描整个文档，分析语法；有错报错,默认添加分号，划分js语句这一步都开始执行，程序如果有语法错误，直接报错 不再执行下面的阶段。
    2. 预编译阶段：------>函数声明整体提升 变量 声明提升 发生在函数执行的前一刻。
    3. 解释执行：解释一句执行一句。
```

> 预编译四步曲

```
    1. 创建AO对象(执行上下文，执行作用域) 全局环境的预编译阶段创建的是GO(等同于window)对象(全局执行上下文)。
    2. 找形参和变量声明，将变量名和形参名作为AO(GO)对象的属性名，值为undefined。
    3. 将实参值和形参值统一
    4. 在函数内找函数声明，值赋予函数体。
```

> 预编译深入理解练习题分析

```JavaScript
    function demo(a, b) {
        console.log(a); // 1
        c = 0;
        var c;
        a = 3;
        b = 2;
        console.log(b); // 2
        console.log(c); // 0
        function b() {}
        function d() {}
        console.log(b); // 2
    }
    demo(1);

    <!--预编译四步曲分析-->

    var AO = {
        // ------->第一步 创建AO对象
        ---------------------------------------------------------------
        a: undefined,
        b: undefined, // ------>第二步 找形参和变量声明 将变量名和形参名作为AO属性名 值为undefined
        c: undefined,
        d: undefined,
        ---------------------------------------------------------------
        a: 1,
        b: undefined, // ------>第三步 将实参和形参值统一
        c: undefined,
        d: undefined
        ---------------------------------------------------------------
        a: 1,
        b: function b() {}, // ------>第四步 在函数体内找函数声明 并把值赋予函数体
        c: undefined,
        d: function d() {}
      };

    <!--后续解释执行-->
```

```JavaScript
    function test(a, b) {
        console.log(a); // function a(){}
        console.log(b); // undefined
        var b = 234;
        console.log(b); // 234
        a = 123;
        console.log(a); // 123
        function a() {}
        var a;
        b = 345;
        var b = function() {};
        console.log(a); //123
        console.log(b); // function (){}
    }
    test(1);

    <!--预编译四步曲分析-->

    var VO = {
        // ------->第一步 创建AO对象
        ---------------------------------------------------------------
        a:undefined,
        b:undefined, // ------>第二步 找形参和变量声明 将变量名和形参名作为AO属性名 值为undefined
        ---------------------------------------------------------------
        a:1,
        b:undefined, // ------>第三步 将实参和形参值统一
        ---------------------------------------------------------------
        a:function a(){}, // ------>第四步 在函数体内找函数声明 并把值赋予函数体
        b:undefined
    }

    <!--后续解释执行-->

```

```JavaScript
    function bar() {
        return foo;
        foo = 10;
        function foo() {}
        var foo = 11;
    }
    console.log(bar()); // function foo(){};
```

```JavaScript
    function bar() {
        return foo;
        foo = 10;
        function foo() {}
        var foo = 11;
    }
    console.log(bar()); // function foo(){};
```

```JavaScript
    console.log(bar()); // 11
    function bar() {
        foo = 10;
        function foo() {}
        var foo = 11;
        return foo;
    }
```

```JavaScript
    a = 100;
    function demo(e) {
        function e() {}
        arguments[0] = 2;
        document.write(e + " "); // 2
        if (a) {
          var b = 555;
          function c() {}
        }
        var c;
        a = 10;
        var a;
        document.write(b + " "); // undefined
        f = 123;
        document.write(c + " "); // undefined(现在)  || function c(){};(以前)
        document.write(a + " "); // 10
    }
   var a;
   demo(1);
   document.write(a + " "); // 100
   document.write(f + " "); // 123
```
