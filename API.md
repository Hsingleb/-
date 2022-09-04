#  一个简单的接口文档类型

​												平喜喜接口文档描述

一、首页数据
	1.1接口功能
				获取首页的数据

​	1.2URL
​			地址/api/index_list/1/data/1  首页推荐
​			地址/api/index_list/2/data/1   运动户外
​			地址/api/index_list/2/data/1	服饰内衣

​	1.3格式

​				JSON数据格式

​	1.4 HTTP请求方式

​				GET

​	1.5请求参数			

```
参数		必选	类型	说明								备注


```



​	1.6返回字段

```
字段		字段类型			说明
code		string			返回结果状态码 0是正确 1是错误
data  		object			首页数据
```



   1.7接口示例		

```
{
	code：0
	data:{
		type:"icons_Data",
		data:[
		  		{
		  			imgUrl:"../../static/img/index/icons1.png",
		  			Text:"运动"
		  		}
		  		... ...
		  	]
	}
}
```





二、搜索接口文档

​	一、搜索数据
​	1.1接口功能
​				获取通过关键词获取到的数据

​	1.2URL
​			地址/api/goods/search  首页推荐

​	1.3格式

​				JSON数据格式 

​	1.4 HTTP请求方式

​				GET

​	1.5请求参数			

```
参数		必选		类型		说明								备注
name	  是		string  	关键词			
newPrice  是		string		排序
//discount
```



​	1.6返回字段

```
字段		字段类型			说明
code		string			返回结果状态码 0是正确 1是错误
data  		object			数据
```



   1.7接口示例		

```
{
	code：0
	data:[{
            id:1,
            imgUrl:"../../static/img/index/T-shirt1.png",
            name:"2022年韩系毛衣校园风格爆款",
            newPrice:199,
            oldPrice:299,
            discount:"5.2"
         },
         ... ...
	]
}
```





三、商品分类数据文档	

一、商品分类
​	1.1接口功能
​				获取通过关键词获取到的数据

​	1.2URL
​			地址/api/goods/list 			商品分类

​	1.3格式

​				JSON数据格式 

​	1.4 HTTP请求方式

​				GET

​	1.5请求参数			

```
参数		必选		类型		说明								备注
name	  是		string  	关键词			
newPrice  是		string		排序				desc  asc
//discount
```



​	1.6返回字段

```
字段		字段类型			说明
code		string			返回结果状态码 0是正确 1是错误
data  		object			数据
```



   1.7接口示例		

```
{
	code：0
	data:[{
		id:1,
        Name:"男装",
		data:[
			{name:上装
			 data:[{
			 	id:1,
			 	Name:'jia'ke'
				url:"xxx"
			 }]
			}			
		]
	}
	]
}
```

