<template>
	<view class="detalis">
		<!-- 商品图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<!-- <swiper-item v-for="(x,i) in swiperList"> -->
			<swiper-item>
				<view class="swiper_item" >
					<image class="swiper_item_img" :src="showData.imgUrl"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 价格和名字 -->
		<view class="detalis_goods">
			<view class="newPrice">￥{{showData.newPrice}}</view>
			<view class="oldPrice">￥{{showData.oldPrice}}</view>
			<view class="detalis_goods_text">{{showData.name}}</view>
		</view>
		<!-- 商品详情 -->
		<Card cardTitle="商品详细"></Card>
		<view class="goods_detalis_img">
			<image class="goods_detalis_img_item" src="https://img.alicdn.com/imgextra/i1/3378598152/O1CN010KZgGD2A5fULKLl6a_!!3378598152.jpg" mode=""></image>
			<image class="goods_detalis_img_item" src="https://img.alicdn.com/imgextra/i2/3378598152/O1CN01v9d01X2A5fUSUNApA_!!3378598152.jpg" mode=""></image>
			<image class="goods_detalis_img_item" src="https://img.alicdn.com/imgextra/i2/3378598152/O1CN01mUSLM92A5fUaZCcV7_!!3378598152.jpg" mode=""></image>
			
			<image class="goods_detalis_img_item" src="https://img.alicdn.com/imgextra/i2/3378598152/O1CN01pe98Of2A5fUJSai90_!!3378598152.jpg" mode=""></image>
			<image class="goods_detalis_img_item" src="https://img.alicdn.com/imgextra/i3/3378598152/O1CN01uacfqJ2A5fUHSZOq5_!!3378598152.jpg"></image>
		</view>
		<!-- 推荐商品 -->
		<Card cardTitle="推荐商品"></Card>
		<CommodityList :commodityList='commodityList'></CommodityList>
	
		<!-- 底部 -->
		<view class="details_foot">
			<view class="iconfont ">&#xe629</view>
			<view class="iconfont ">&#xe87a</view>
			<view class="add_shopCart" @tap="showPop">加入购物车</view>
			<view class="purchase" @tap="showPop">立即购买</view>
		</view>
			
			
		<!-- 弹出层 -->
		<view class="pop" v-show="isShow" @touchmove.stop.prevent=''>

			<!-- 遮罩层 -->
			<view class="mask" @tap="hidePop"></view>
			<!-- 具体内容 -->
			<view class="pop_box" :animation="animationData">
				<view>
					<image class="pop_img" src="../../static/img/details/icons3.png"></image>
				</view>
				<view class="pop_num">
					<view>购买数量</view>
					

					<uni-number-box :min="1" :max="99" value="1"></uni-number-box>


				</view>
				
				<view class="pop-sub">
					确定
				</view>
				
			</view>
		</view>
			
	</view>
</template>

<script>
	import myhttp from "@/common/api/request.js"
	import Card from "@/compaents/common/card.vue"
	import CommodityList from "@/compaents/common/CommodityList.vue"
	
	export default {
		components:{
			Card,
			CommodityList
		},
		data() {
			return {
				showData:{},
				animationData:{},
				isShow:false,
				swiperList:[
					{imgUrl:"../../static/img/details/icons1.png"},
					{imgUrl:"../../static/img/details/icons2.png"},
					{imgUrl:"../../static/img/details/icons3.png"}
				],
				commodityList:[{
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
		},
		onBackPress(){
			if(this.isShow){
				this.hidePop()
				return true
			}
		},
		methods: {
			getData(id){
				myhttp.request({
					url:"/goods/id",
					data:{
						id:id
					},
				}).then((res)=>{
					this.showData=res[0]
					// console.log(this.showData);
				}).catch(()=>{
					console.log("请求错误");
				})
			},
			showPop(){
				var animation = uni.createAnimation({
				  duration: 10,
				})
				animation.translateY(400).step()
				this.animationData = animation.export()
				
				var animation = uni.createAnimation({
				  duration: 400,
				})
				this.isShow = true
				setTimeout(()=>{
					animation.translateY(0).step()
					this.animationData = animation.export()
				},100)
			},
			hidePop(){
				var animation = uni.createAnimation({
				  duration: 200,
				})
				animation.translateY(400).step()
				this.animationData = animation.export()
				
				this.isShow=false
				
			}
		},
		onLoad(e) {
			this.getData(e.id)
		},
		onNavigationBarButtonTap(e){
			if(e.index=1){
				uni.share({
					"provider":"weixin",
					"type":0,
					"title":this.showData.name,
					"scene":"WXSceneSession",
					"href":"http://192.168.1.2:8080/#/pages/show_details/show_details?id="+this.showData.id+"",
					"imageUrl":"https://gw.alicdn.com/bao/uploaded/i4/1607723262/O1CN01s7t2ID1Zy2j79N8Wa_!!1607723262.jpg_300x300q90.jpg_.webp",
					success:function(){
						uni.showTabBar({
							title:"分享成功"
						})
					},
					fail:function(err) {
						console.log(JSON.stringify(err));
					}
					
				})
			}
		}
	}
</script>

<style scoped>
.detalis{
	padding-bottom: 90rpx;
}
swiper{
	width: 100%;
	height: 700rpx;
}
.swiper_item_img{
	width: 100%;
	height: 700rpx;
}
.detalis_goods{
	text-align: center;
	font-weight: bold;
	font-size: 36rpx;
	padding: 10rpx;
}
.oldPrice{
	text-decoration:line-through;
	color: gray;
}
.goods_detalis_img{
	width: 80%;
	padding-left: 150rpx;
}
.goods_detalis_img_item{
	width: 80%;

}
.details_foot{
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	bottom: 0rpx;
	width: 100%;
	height: 90rpx;
	background-color: #fff;
}
.details_foot .iconfont{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60rpx;
	height: 60%;
	border-radius: 100%;
	background-color: #41cfff;
	color: #fff;
	text-align: center;
	margin: 0 10rpx;

	
}
.add_shopCart{
	margin: 0 30rpx;
	padding: 6rpx 30rpx;
	background-color: black;
	color: #fff;
	border-radius: 40rpx;
}
.purchase{
	margin: 0 10rpx;
	padding: 6rpx 30rpx;
	background-color: #ff6000;
	color: #fff;
	border-radius: 40rpx;
}
.pop{
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 999;
}
.mask{
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0,0,0,0.3);
}
.pop_box{
	position: fixed;
	left: 0;
	bottom: 0;
	height: 350px;
	width: 100%;
	background-color:#fff;
}
.pop_img{

	height: 260rpx;
	width: 260rpx;
/* 	position: absolute;
	top: -60rpx; */
	border-radius: 10rpx;
}
.pop_num{
	padding: 20rpx 20rpx;
	display: flex;
	justify-content:space-between;
	
}
.pop-sub{
	line-height: 80rpx;
	width: 100%;
	background-color: #41cfff;
	color: #fff;
	text-align: center;
	position: absolute;
	bottom: 0;
}
</style>
