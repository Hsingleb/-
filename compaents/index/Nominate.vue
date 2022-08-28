<template>
	<view class="NominateShop">
		<view class="Shop_item">
			
			<view class="shop_big">
				<image class="shop_big" src="@/static/img/index/Li_Ningshop.png"></image>
			</view>
			
			<scroll-view scroll-x="true"
			class="scroll_content">
				<view class="scroll_item">
					<Commodity  :commodityData='commodityData' font="18rpx"
					itemH="250rpx" itemW="200rpx" wrap="no-wrap"></Commodity>
				</view>
			</scroll-view>
			
		</view>
		
	</view>
</template>

<script>
	import Commodity from "@/compaents/common/commodity.vue"
	export default{
		data(){
			return{
				commodityData:[
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
					{
						id:4,
						imgUrl:"../../static/img/index/shoe1.png",
						name:"2022年最火爆款跑鞋",
						newPrice:299,
						oldPrice:369,
						discount:"8.0"
					},
					{
						id:5,
						imgUrl:"../../static/img/index/shoe1.png",
						name:"2022年最火爆款跑鞋",
						newPrice:299,
						oldPrice:369,
						discount:"8.0"
					},
				]
			}
		},
		components:{
			Commodity
		}
	}
</script>

<style scoped>
	.scroll_content{
		width: 100%;
		white-space: nowrap;
	}
	.scroll_item{
		display: inline-block;
	}
	.shop_big{
		height: 360rpx;
		width: 100%;
	}
</style>