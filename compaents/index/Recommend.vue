<template>
	<view id="HeardRecommend">	
		
		<view class="Recommend_item" v-for="(item,index) in recommendData">
			<image class="item_big" :src="item.bigUrl" mode=""></image>
			<view class="item_small_box">
				<block v-for="(x,i) in item.data" >
					<image class="small_img" :src="x.imgUrl"></image>
				</block>
			</view>
		</view>
		
		
	</view>
	
</template>

<script>
	export default{
		props:{
			recommendData:Array
		}
	}
</script>

<style scoped>
	*{
		padding: 0rpx;
		margin: 0px;
	}
	#HeardRecommend{
		background-color:#1296db;
		padding: 20rpx;
	}
	.Recommend_item{
		display: flex;
		flex-direction: column;
		border-radius: 25rpx;
		border: 2rpx solid red;
		margin: 20rpx 0rpx;
		overflow: hidden;
	}
	.item_big{
		height: 250rpx;
		width: 100%;
	}
	.item_small_box{
		width: 100%;
		height: 250rpx;
		overflow: hidden;
	}
	.small_img{
		height: 250rpx;
		width: 33.3333%;
	}
	
	
</style>