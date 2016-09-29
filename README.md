# filterMore-1.0

互联网风格前端筛选插件

##      	目录

*	[特性](#特性)
*	[快速上手](#快速上手)
*	[参数介绍](#参数介绍)
*	[下载](#下载)
*	[方法](#方法)
*	[更新日志](#更新日志)
*	[授权协议](#授权协议)

##	特性

1.	首款开源筛选插件
2.	参数配置项多，功能强大（[演示](https://CrazyJson.github.com/filterMore/demo/index.html)）
3.	轻量级(8k)
4.	支持所有流行的浏览器

## 快速上手

### 基本例子

页面使用一个占位Div
	
<div class="searchbox" id="basic_searchbox"></div>

### 初始化
        var options = {
            //查询事件
            "search": function (paramList) {
                $("#basic_searchbox_param").html('查询参数:'+JSON.stringify(paramList));
            },
            //默认展开条件数
            "expandRow": 2,
            //查询条件
            "searchBoxs": [
                {
                    "id": "Status_Basic",
                    "title": "任务状态",
                    "isMultiple":true,
                    "data": [
                        { "value": "0", "text": "运行" },
                        { "value": "1", "text": "停止" }
                    ]
                },
                {
                    "id": "Createor_Basic",
                    "title": "创建人",
                    "data": [
                        { "value": "admin", "text": "系统管理员" },
                        { "value": "zhangsan", "text": "张三" }
                    ]
                }
            ]
        };
        $("#basic_searchbox").fiterMore(options);

[演示](https://CrazyJson.github.com/filterMore/demo/index.html#basic)

##	默认值

初始化时可以设置默认选中项

        var options = {
                   //查询事件
                   "search": function (paramList) {
                   },
                   //查询条件
                   "searchBoxs": [
                       {
                           "id": "Status_Default",
                           "title": "任务状态",
                           "isMultiple":true,
                         `  "defaults": ['0','1'], //默认选中值，没有则选中全部`
                           "data": [
                               { "value": "0", "text": "运行" },
                               { "value": "1", "text": "停止" }
                           ]
                       }
                   ]
               };
               $("#defaultValue_searchbox").fiterMore(options);

[演示](https://CrazyJson.github.com/filterMore/demo/index.html#defaultValue)

###	数据源格式自定义

可以自定义接收数据源格式

        var options = {
            //查询事件
            "search": function (paramList) {
            },
            //查询条件
            "searchBoxs": [
                {
                    "id": "Task_CustomData",
                    "title": "任务集合",
                    "valueField":"taskId", //选项json 键字段名称 默认为value
                    "textField":"taskName",   //选项json 值字段名称 默认为text
                    "data": [
                        { "taskId": "1", "taskName": "代理ip爬虫任务" },
                        { "taskId": "2", "taskName": "日志清理任务" }
                    ]
                }
            ]
        };
        $("#customData_searchbox").fiterMore(options);
	
[演示](https://CrazyJson.github.com/filterMore/demo/index.html#customData)

##	下载

* [filterMore.min.js](https://raw.githubusercontent.com/CrazyJson/filterMore/master/dist/filterMore.min.js) *(压缩后js文件, 7.9kb)*
* [fiterMore.min.css](https://raw.githubusercontent.com/CrazyJson/filterMore/master/dist/css/fiterMore.min.css) *(压缩后css文件, 2.1kb)*

## 方法

###	getParamList()

获取搜索条件参数

###	searchFunctionCall(options)
options：{"setValue":[]} key为要调用的函数名称 value:为函数调用参数

	setValue函数为赋值函数 调用如下 $(".searchbox").searchFunctionCall({setValue:[{"ValueList":["1"],"id":"CreatedTime"}]}) 
	getParamList函数为取值函数 调用如下 $(".searchbox").searchFunctionCall({getParamList:null})

[演示](https://CrazyJson.github.com/filterMore/demo/index.html#functionCall)


## 更新日志

### v1.0 release

1.	~~发布版本：<https://github.com//CrazyJson/fiterMore>~~

## 授权协议

Released under the MIT, BSD, and GPL Licenses

============

[所有演示例子](https://CrazyJson.github.com/filterMore/demo/index.html)

