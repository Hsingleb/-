var express = require('express');
var app =express()
var router = express.Router();
var connection = require("../db/mysqlSql.js")
 const cors = require('cors')


router.use(cors())
// 跨域设置
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
	// Access-Control-Allow-Headers：可根据浏览器的F12查看，把对应的粘贴在这里就行
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods","*");
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    next();
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); 

router.get('/api/index_list/1/data/1', function(req, res, next) {
  res.json({
	  "code":0,
	  "data":{
			topBar:[
				{id:1,name:"推荐好物"},
				{id:2,name:"运动户外"},
				{id:3,name:"服饰内衣"},
				{id:4,name:"潮人衣着"},
				{id:5,name:"数码科技"},
				{id:6,name:"鞋靴箱包"},
				{id:7,name:"美妆个护"},		
			],
			data:[
				{
					type:"indexSwiperData",
					data:[
						{imgurl:"../../static/img/index/1.jpg"},
						{imgurl:"../../static/img/index/2.jpg"},
						{imgurl:"../../static/img/index/3.jpg"}
					]
				},
				{
					type:"recommend",
					data:[
						{
							bigUrl:"../../static/img/index/Gundam.png",
							data:[
								{imgUrl:"../../static/img/index/Gundam1.png"},
								{imgUrl:"../../static/img/index/Gundam2.png"},
								{imgUrl:"../../static/img/index/Gundam3.png"},
							],
						},
						{
							bigUrl:"../../static/img/index/Gundam.png",
							data:[
								{imgUrl:"../../static/img/index/Gundam1.png"},
								{imgUrl:"../../static/img/index/Gundam2.png"},
								{imgUrl:"../../static/img/index/Gundam3.png"},
							],
						}
					]
				},
				{	
					type:"commodityListData",
					data:[
						{
							id:1,
							imgUrl:"../../static/img/index/T-shirt1.png",
							name:"2022年韩系毛衣校园风格爆款",
							newPrice:199,
							oldPrice:299,
							discount:"5.2"
						},
						{
							id:2,
							imgUrl:"../../static/img/index/trousers1.png",
							name:"库存不多，爆款打折甩卖，错过等一年",
							newPrice:299,
							oldPrice:399,
							discount:"5.1"
						},
						{
							id:3,
							imgUrl:"../../static/img/index/shoe1.png",
							name:"2022年最火爆款跑鞋",
							newPrice:199,
							oldPrice:369,
							discount:"8.0"
						},
					]
				}
			]
		}
	  })
});

router.get('/api/index_list/2/data/1', function(req, res, next) {
  res.json({
	  code:0,
	  data:[
		  {
			type:"Banner_img",
			data:"../../static/img/index/Bnner1.png"
		  },
		  {
		  	type:"icons_Data",
		  	data:[
		  		{
		  			imgUrl:"../../static/img/index/icons1.png",
		  			Text:"运动"
		  		},
		  		{
		  			imgUrl:"../../static/img/index/icons1.png",
		  			Text:"床上用品"
		  		},
		  		{
		  			imgUrl:"../../static/img/index/icons1.png",
		  			Text:"生活好物"
		  		},
		  		{
		  			imgUrl:"../../static/img/index/icons1.png",
		  			Text:"T恤"
		  		},
		  		{
		  			imgUrl:"../../static/img/index/icons1.png",
		  			Text:"运动鞋子"
		  		},
		  		{
		  			imgUrl:"../../static/img/index/icons1.png",
		  			Text:"运动"
		  		},
		  		{
		  			imgUrl:"../../static/img/index/icons1.png",
		  			Text:"运动"
		  		},
		  		{
		  		imgUrl:"../../static/img/index/icons1.png",
		  		Text:"运动",
		  		}
		  	]
		  },
		  {
		  	type:"commodityList",
		  	data:[
		  		{
		  			id:1,
		  			imgUrl:"../../static/img/index/T-shirt1.png",
		  			name:"2022年韩系毛衣校园风格爆款",
		  			newPrice:199,
		  			oldPrice:299,
		  			discount:"5.2"
		  		},
		  		{
		  			id:2,
		  			imgUrl:"../../static/img/index/trousers1.png",
		  			name:"库存不多，爆款打折甩卖，错过等一年",
		  			newPrice:299,
		  			oldPrice:399,
		  			discount:"5.1"
		  		},
		  		{
		  			id:3,
		  			imgUrl:"../../static/img/index/shoe1.png",
		  			name:"2022年最火爆款跑鞋",
		  			newPrice:199,
		  			oldPrice:369,
		  			discount:"8.0"
		  		},
		  	]
		  }
	  ]
  })
}); 

router.get('/api/index_list/3/data/1', function(req, res, next) {
  res.json({
	  code:0,
	  data:[
		  {
			type:"Banner_img",
			data:"../../static/img/index/Bnner1.png"
		  },
		  {
		  	type:"icons_Data",
		  	data:[
		  		{
		  			imgUrl:"../../static/img/index/icons1.png",
		  			Text:"服饰内衣"
		  		},
		  		{
		  			imgUrl:"../../static/img/index/icons1.png",
		  			Text:"服饰内衣"
		  		},
		  		{
		  			imgUrl:"../../static/img/index/icons1.png",
		  			Text:"服饰内衣"
		  		},
		  		{
		  			imgUrl:"../../static/img/index/icons1.png",
		  			Text:"服饰内衣"
		  		},
		  		{
		  			imgUrl:"../../static/img/index/icons1.png",
		  			Text:"服饰内衣"
		  		},
		  		{
		  			imgUrl:"../../static/img/index/icons1.png",
		  			Text:"服饰内衣"
		  		},
		  		{
		  			imgUrl:"../../static/img/index/icons1.png",
		  			Text:"服饰内衣"
		  		},
		  		{
		  		imgUrl:"../../static/img/index/icons1.png",
		  		Text:"服饰内衣",
		  		}
		  	]
		  },
		  {
		  	type:"commodityList",
		  	data:[
		  		{
		  			id:1,
		  			imgUrl:"../../static/img/index/T-shirt1.png",
		  			name:"2022年韩系毛衣校园风格爆款",
		  			newPrice:199,
		  			oldPrice:299,
		  			discount:"5.2"
		  		},
		  		{
		  			id:2,
		  			imgUrl:"../../static/img/index/trousers1.png",
		  			name:"库存不多，爆款打折甩卖，错过等一年",
		  			newPrice:299,
		  			oldPrice:399,
		  			discount:"5.1"
		  		},
		  		{
		  			id:3,
		  			imgUrl:"../../static/img/index/shoe1.png",
		  			name:"2022年最火爆款跑鞋",
		  			newPrice:199,
		  			oldPrice:369,
		  			discount:"8.0"
		  		},
		  	]
		  }
	  ]
  })
}); 

router.get('/api/index_list/2/data/2', function(req, res, next) {
  res.json({
	  code:0,
	  data:[
		  {
		  	type:"commodityList",
		  	data:[
		  		{
		  			id:1,
		  			imgUrl:"../../static/img/index/T-shirt1.png",
		  			name:"2022年韩系毛衣校园风格爆款",
		  			newPrice:199,
		  			oldPrice:299,
		  			discount:"5.2"
		  		},
		  		{
		  			id:2,
		  			imgUrl:"../../static/img/index/trousers1.png",
		  			name:"库存不多，爆款打折甩卖，错过等一年",
		  			newPrice:299,
		  			oldPrice:399,
		  			discount:"5.1"
		  		},
		  		{
		  			id:3,
		  			imgUrl:"../../static/img/index/shoe1.png",
		  			name:"2022年最火爆款跑鞋",
		  			newPrice:199,
		  			oldPrice:369,
		  			discount:"8.0"
		  		},
		  	]
		  }
	  ]
	  })
}); 

router.get('/api/index_list/2/data/3', function(req, res, next) {
  res.json({
	  code:0,
	  data:[
	  		  {
	  		  	type:"commodityList",
	  		  	data:[
	  		  		{
	  		  			id:1,
	  		  			imgUrl:"../../static/img/index/T-shirt1.png",
	  		  			name:"2022年韩系毛衣校园风格爆款",
	  		  			newPrice:199,
	  		  			oldPrice:299,
	  		  			discount:"5.2"
	  		  		},
	  		  		{
	  		  			id:2,
	  		  			imgUrl:"../../static/img/index/trousers1.png",
	  		  			name:"库存不多，爆款打折甩卖，错过等一年",
	  		  			newPrice:299,
	  		  			oldPrice:399,
	  		  			discount:"5.1"
	  		  		},
	  		  		{
	  		  			id:3,
	  		  			imgUrl:"../../static/img/index/shoe1.png",
	  		  			name:"2022年最火爆款跑鞋",
	  		  			newPrice:199,
	  		  			oldPrice:369,
	  		  			discount:"8.0"
	  		  		},
	  		  	]
	  		  }
	  ]
  })
}); 

router.get("/api/goods/search",function(req,res,next){
	//ASC  DESC
	let [goodsName,orderName] = Object.keys(req.query)
	
	let name = req.query.name
	
	let order  = req.query[orderName]
	
	console.log(goodsName,orderName,name,order);
	
	connection.query("select * from goods_search_data where name like '%"+name+"%' order by "+orderName+" "+order+"",
	function(error,results,fields){
		console.log(results)
		
		res.json({
			code:0,
			data:results
		})
	})
})

router.get("/api/goods/list",function(req,res,next){
	res.json({
		code:0,
		data:[
			{
				id:1,
				name:"男装",
				data:[{
						name:"上装",
						data:[{
								id:1,
								name:"短袖",
								url:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2961996871/O1CN01YTWup520cy2rBdFAF_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
							},
							{
								id:2,
								name:"长袖",
								url:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2961996871/O1CN01YTWup520cy2rBdFAF_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
							},
							{
								id:3,
								name:"衬衫",
								url:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2961996871/O1CN01YTWup520cy2rBdFAF_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
							},
						]
					},{
						name:"下装",
						data:[{
								id:1,
								name:"短裤",
								url:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2067662414/O1CN01iP9j3S1TherphoHJr_!!2067662414.jpg_580x580Q90.jpg_.webp"
							},
							{
								id:2,
								name:"运动裤",
								url:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2067662414/O1CN01iP9j3S1TherphoHJr_!!2067662414.jpg_580x580Q90.jpg_.webp"
							},
							{
								id:3,
								name:"牛仔裤",
								url:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2067662414/O1CN01iP9j3S1TherphoHJr_!!2067662414.jpg_580x580Q90.jpg_.webp"
							},
						]
					},
				]
			},
			{
				id:2,
				name:"女装",
				data:[{
						name:"上装",
						data:[{
								id:1,
								name:"短袖",
								url:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2209037391703/O1CN01zD3aIK1OS1FoFqM4s_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
							},
							{
								id:2,
								name:"长袖",
								url:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/196993935/O1CN01J9oVuw1ewHI6MmcVf_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
							},
							{
								id:3,
								name:"衬衫",
								url:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2201489683554/O1CN01GgJHeA1c7mO8uPZ3O_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
							},
						]
					},{
						name:"下装",
						data:[{
								id:1,
								name:"短裙",
								url:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/1092652467/O1CN01Uc1HT81U5vphXTXuf_!!1092652467.jpg_580x580Q90.jpg_.webp"
							},
							{
								id:2,
								name:"长裙",
								url:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2455352241/O1CN01ooT6g01SQQMI3qIOo_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
							},
							{
								id:3,
								name:"牛仔裤",
								url:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2067662414/O1CN01iP9j3S1TherphoHJr_!!2067662414.jpg_580x580Q90.jpg_.webp"
							},
						]
					},
				]
			}
		]
	})
})

router.get("/api/goods/id",function(req,res,next){
	
	id = req.query.id
	
	connection.query("select * from goods_search_data where id="+id+"",
	function(error,results,fields){
		// console.log(results)
		
		res.json({
			code:0,
			data:results
		})
	})
})



module.exports = router;
