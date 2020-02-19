# 节点

#### 节点的四个属性

- nodeName: 元素的标签名，以大写形式展示 只读
- nodeValue: Text 节点或者 Comment 加点的文本内容，可读写
- nodeType: 该节点的类型 只读
- attributes：Element 节点的属性集合

##### 节点的一个方法

Node.hasChildNodes();

##### 节点的类型

> 取节点的类型：nodeType()

- 元素节点：1
- 属性节点：2
- 文本节点：3
- 注释节点：8
- docment 节点：9
- DocumentFragment：11
