# 数组

> 创建数组

1. 字面量方式：var arr = [];
2. 利用系统自带的构造函数 var arr = new Array();

_两种方式唯一的差别就是，当构造函数传参一位的时候，表示创建的是一个长度为 X 的空数组，而字面量则表示创建了一个长度为 1，数组第 0 位是 X 的数组_

> 数组的方法
>
> > - 改变原数组：push() pop() shift() unshift() sort() revese() splice()
> > - 不改变原数组：concat() join() slice() ----> split() toString()

> 改变原数组

#### 1. sort() 给数组排序

```JavaScript
 /**
 *   可以接收一个函数作为参数让开发者定义排序规则
 *  1、函数必须传入两个参数
 *  2、看函数返回值 1) 返回正数，后面的值放在前面
 *                  2) 返回负数， 前面的数放在前面，保持不动
 *                  3) 返回0，保持不动
 */
    var arr = [1,5,82.30,51,34,3,2];
    arr.sort(function(prop1,prop2){
        return prop1 - prop2;  // 升序
        return prop2 - prop1;  // 降序
    })
```

> sort()应用题

**第 01 题**. 给一个有序数组，随机打乱顺序,返回原数组

```JavaScript
    var arr = [1,2,3,4,5,6,7,8];
    function arrRandom(arr) {
        arr.sort(function(prop1, prop2) {
            return Math.random() - 0.5;
        });
        return arr;
    }
```

**第 02 题**. 给下面数据按年龄排序

```JavaScript
    var wang = {
        name: 'wamg',
        age:18,
        sex:'male'
    }
    var lin = {
        lin: "lin",
        age: 34,
        sex: "female"
    }
    var zhou = {
        name: "周",
        age: 16,
        sex: "female"
    }
    var arr = [lin,zhou,wang];
    arr.sort(function (prop1,prop2){
        return prop1.age - prop2.age;
    })
```

#### 2. push() 给数组末位添加元素，返回数组的长度

> push()练习题

**第 01 题**. 手写 push 方法

```JavaScript
   Array.prototype.push = function() {
       for (var i = 0; i < arguments.length; i++) {
           this[this.length] = arguments[i];
       }
       return this.length;
   };
```

#### 3.pop() 剪切数组最后一个元素 返回剪切元素（数组最后一个）

#### 4.unshift() 给数组最首位添加元素 返回数组长度

#### 5.shift() 剪切数组第一个元素 返回第一个元素

#### 6.splice(从该位开始截取，截取多少个，往切口添加数据) 返回

#### 7.reverse() 把原数组倒序返回

> 不改变原数组

#### 1.concat() 拼接数组

#### 2.join(params) 把数组按字符串参数 params 转换成一个数组

#### 3.slice(从该位开始截取，截取到该位，) 返回截取数组

### 类数组

> 特点 属性必须为索引(数字)属性 必须要有 length 最好添加上 push 方法

```JavaScript
    <!--obj就是一个类数组，但它本质是一个对象 只是可以当数组一样的使用-->
    var obj = {
        "0": "wagnyan",
        "1": 123,
        "2": "哈哈",
        "length": 3,
        "push": Array.prototype.push,
    };
```

#### 数组去重

```JavaScript
 <!--数组去重-->
     Array.prototype.unique = function() {
        var obj = {},
            arr = [],
            len = this.length;
        for (var i = 0; i < len; i++) {
            if (!obj[this[i]]) {
                obj[this[i]] = "unique";
                arr.push(this[i]);
            }
        }
        return arr;
    };
```
