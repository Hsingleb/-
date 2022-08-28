var express = require('express');
var router = express.Router();

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


module.exports = router;
