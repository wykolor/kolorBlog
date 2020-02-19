# 类型转换

> Tips：我们都知道 JavaScript 是动态类型语言，只有在运行的时候才能确认值的数据类型,所以 JavaScript 中的取值类型是非常的灵活的。我们拿它的基本类型 Boolean 来举例：当 JavaScript 期望使用一个布尔值的时候，你可以提供任何类型值，JavaScript 将会根据需要自动转换类型。一些值(真值)转换为 true，其他值(假值)转换为 false。JavaScript 的其他类型也是同样适用。

#### 数据类型检测

> typeof()：是 JavaScript 用来检测数据类型而暴露出来的全局方法，它最终返回的值有六种：==number==、==string==、==boolean==、==object==、==function==、==undefined== <br /> typeof 是唯一一个使用未定义的变量不会报错的 API，传入未定义的变量，它会返回一个 undefined。并且 typeof 返回的值都是字符串类型,</br >
> 值得注意的是 typeof(null) 不会返回预想的 null，而是"object"，这是历史遗留问题

#### 隐式类型转换

> 下表是简要的 JavaScript 中的类型转换(空格表示不必要也没有进行类型转换)

| 值                   | 字符串          | 数字 | 字符串 | 对象                  |
| -------------------- | --------------- | ---- | ------ | --------------------- |
| undefined            | "undefined"     | NaN  | false  | throws TypeError      |
| null                 | "null"          | 0    | false  | throws TypeError      |
| true                 | "true"          | 1    |        | new Boolean(true)     |
| false                | "false"         | 0    |        | new Boolean(false)    |
| ""(空字符串)         |                 | 0    | false  | new String("")        |
| "1.2"(非空，数字)    |                 | 1.2  | true   | new String("1.2")     |
| "one"(非空，非数字)  |                 | NaN  | true   | new String('one')     |
| 0                    | "0"             |      | false  | new Number(0)         |
| -0                   | "0"             |      | false  | new Number(-0)        |
| NaN                  | "NaN"           |      | false  | new Number(NaN)       |
| Infinity             | "Infinity"      |      | true   | new Number(Infinity)  |
| -Infinity            | "-Infinity"     |      | true   | new Number(-Infinity) |
| 1(无穷大，非零)      | "1"             |      | true   | new Number(1)         |
| {}(任意对象)         |                 |      | true   |
| \[\]                 | ""              | 0    | true   |
| \[9\](1 个数字元素)  | "9"             | 9    | true   |
| \['a'\](其他数组)    | 使用 join()方法 | NaN  | true   |
| function(){任意函数} |                 | NaN  | true   |

#### 显示类型转换

#### 转换和相等性

- 由于 JavaScript 可以做灵活的类型转换，因此其 "==" 想等运算符也随相等的含义灵活多变。例如，如下这些比较结果均为 true：

```JavaScript
null == undefined   // 这两值被认为是相等的
"0" == 0            // 在比较之前字符串被转换为数字
0 == false          // 在比较之前布尔值被转换为数字
"0" == false        // 在比较之前字符串和布尔值都转换为数字
```

> Tips：需要注意的是，一个值转换为另外一个值并不意味着两个值相等。比如，如果在期望使用布尔值的地方使用的 undefined，它将转换为 false，但这并不代表着 undefined == false。JavaScript 运算符和语句期望使用多样化的数据类型，并可以互相转换。if 语句将 undefined 转换为 false，但 "==" 运算符从不试图将操作数转换为布尔值。

- 严格相等运算符 "===" 的比较规则，首先会计算其操作数的值，然后再比较这两个值，比较过程没有任何类型转换：

```JavaScript
    - 如果两个值类型不相同，则他们不相等
    - 如果两个值都是null或者都是undefined，则他们不相等
    - 如果两个值都是true或者都是false，则他们相等
    - 如果其中一个值是NaN，或者两个值都是NaN，则他们不相等。NaN和其他任何值都不相等，包括它本身！所以可以通过 x!==x判断x是否为NaN，只有x为NaN的时候，这个表达式的结果才是true
    - 如果两个值为数字且数值相等，则他们相等。如果一个是0，一个是-0，则他们同样相等
    - 如果两个引用值指向的是同一个对象、数组或函数，则他们是相等的。如果指向不同发对象，则他们是不相等的，尽管两个对象的具有完全一样的属性和方法。
```

- 相等运算符 "==" 和恒等运算符相似，但是比较并不严格：如果两个操作数不是同一类型，那么相等运算符会尝试进行一些类型转换，然后再进行比较：如下规则

```JavaScript
    - 如果两个操作数的类型相等，就和上面的恒等运算符发比较规则一样。如果严格相等，那么比较结果就相等。如果不严格相等，则比较结果不相等
    - 如果操作数类型不同， “==” 相等运算符也可能hi认为他们相等。检测将会遵守如下规则和类型转换：
        * 如果一个值是null，另一个是undefined，则它们相等
        * 如果一个值是数字，另外一个数字符串，先将字符串转换为数字。然后使用转换后的值进行比较
        * 如果其中一个值是true，则将其转换为1再进行比较。如果一个值是false，则将其转换为0在进行比较
        * 如果一个值是对象，另外一个是字符串或者数字，则通过上表中的转换规则将对象转换为原始值，然后再进行比较。
        * 其余不同类型之间比价均不相等
```

#### 对象转换为原始值

> Tips：任意 JavaScript 的值都可以转换为布尔值，下面这些值会准转换为 false：所有其他值，包括所有对象(数组)都会转换为 true。<br/>

- undefined
- null
- 0
- -0
- NaN
- ""(空字符串)
