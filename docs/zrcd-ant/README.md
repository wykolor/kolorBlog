# 组件库说明

该组件库是在NG-ZORRO(v7.5.1)基础上二次封装了form组件、query查询组件、table组件

组件发布在npm上，链接为 [https://www.npmjs.com/package/zrcd-ant](https://www.npmjs.com/package/zrcd-ant)

::: warning 注意
因为公司LUNZ+框架的angular版本是7，所以该组件库引入的NG-ZORRO也是针对angular7的，如果版本不对应，则无法使用
:::

## Form

### 使用示例:


![An image](../.vuepress/public/zrcd-ant/form.png)


```html
<zr-ant-form [formData]="formData" #zrAntForm></zr-ant-form>
```

```javascript
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormData } from 'zrcd-ant';

export class FromExampleComponent implements OnInit {
    public validateForm: FromGroup;
    public formData: FormData = {
        fields: [
            {
                label: '农机Vin号',
                op: 'cn',
                prop: 'vinNumber',
                type: 'select',
                formLabelOption: {
                    nzRequired: true,
                },
                formControlOption: {
                    ngStyle: {
                    width: '310px',
                    },
                },
                data: [
                    {
                        label: 'vin1',
                        value: '001'
                    },
                    {
                        label: 'vin2',
                        value: '002'
                    },
                ],
                fields: {
                    label: 'label',
                    value: 'value',
                },
            },
            {
                label: '农机名称',
                op: 'cn',
                prop: 'machineName',
                type: 'input',
                formControlOption: {
                    disabled: true,
                    ngStyle: {
                        width: '310px',
                    },
                },
            }
        ],
        validateForm: this.validateForm
    }
    constructor(private fb: FormBuilder) {
        this.buildForm();
    }

    ngOnInit() {}

    buildForm() {
        this.validateForm = this.fb.group({
            machineName: [null, [Validators.required]],
            vinNumber: [null]
        })
    }
}

```

### API

| 参数          | 说明          | 类型   | 默认值 |
| ------------- |:----------------------:| :-----:| :-------------:| 
| [formData]     | 作为组件唯一的数据入口 | FormData(组件内置类型，见下文描述) | 无|

### public EventEmitter

| 参数          | 说明          | 类型   | 默认值 |
| ------------- |:----------------------:| :-----:| :-------------:| 
| (ngModelChange)    |  | FormData(组件内置类型，见下文描述) | 无|





### 内置类型说明

#### FormData :lemon:

| key值          | 说明               | 类型         | 默认值 |
| ------------- |:-------------------:| :-----:      |:-------------:| 
| fields        | 表单项集合         | Field[]  | 无|
| validateForm  | 响应式表单初始化   | FormGroup     | 无 | 

#### Field :lemon:

| key值          | 说明               | 类型         | 默认值 |
| ------------- |:-------------------| :-----:      |:-------------:| 
| label        |  用于标示当前表单项的内容(必选)        | string  | 无|
| prop         | 用于当前表单项的formControlName(和validateForm中的表单字段必须严格保持一致)(必选)   | string     | 无 | 
| type         | 用于标示当前表单项类型,可选值(input、inputGroup、textarea、autoInput、select、date、radio、checkbox、treeSelect、cascader)(必选) | string | 无 |
| data        | 当type为select、cascader、autoInput、radio、treeSelect时，需要的额外可选数据 | any[] | [] |
| fields      | 仅当data有值的时候才有效,用于自定义data中用于标注label和绑定value的字段 | {label?: string; value?: string; disabled?: boolean} | {} |
| dateType    | 仅当type为date的时候有效，用于标注日期选择器的类型 | | |
| formControlOption| | | |
| formLabelOption | | | |
| formExplainOption | | | |
| op   | | | | 

## Query查询

## Table表格