<template>
	<view class="commodity" :style="'flex-wrap:'+wrap+';'"  >		
		
		<view class="commodity_item" v-for="(item,index) in commodityData" 
		:key='item.id' :style="'width:'+itemW+';'"
		@click="toShowDelatalis(item.id)">
		
			<image class="item_image" :style="'height:'+itemH+';'" :src="item.imgUrl"></image>
			
			<view class="commodity_content">
				<text class="commodity_name"  :style="'font-size:'+font+';'">{{item.name}}</text>
				<view class="commodity_Price">
					<text class="newPrice" :style="'font-size:4rpx+'+font+';'">￥{{item.newPrice}}</text>
					<text class="oldPrice" :style="'font-size:'+font+';'">￥{{item.oldPrice}}</text>
				</view>
				<text class="discount" :style="'font-size:'+font+';'">{{item.discount}}折</text>
			</view>
		
		</view>
	</view>
	
	
	
	
</template>

<script>
	export default{
		props:{
			commodityData:Array,
			itemW:{
				type:String,
				default:"350rpx"
			},
			itemH:{
				type:String,
				default:"400rpx"
			},
			wrap:{
				type:String,
				default:"wrap"
			},
			font:{
				type:String,
				default:"20rpx"
			}
		},
		methods:{
			toShowDelatalis(id){
				uni.navigateTo({
					url:'../../pages/show_details/show_details?id='+id+''
				})
			}
		}
	}
</script>

<style scoped>
	.commodity{
		display: flex;
		
	}
	.commodity_item{
		padding: 10rpx;
	}
	.item_image{
		
		width: 100%;
		border-radius: 10rpx
	}
	.commodity_content{
		text-align: center;
	}
	.commodity_name{
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		color: #333333;
		word-break: break-all;
		padding: 6rpx 20rpx;
	}
	.oldPrice{
		text-decoration:line-through;
		color: gray;
	}
	.discount{
		border: 2rpx solid red;
		border-radius: 4rpx;
		color: brown;
		padding: 0rpx 16rpx;
	}
</style>