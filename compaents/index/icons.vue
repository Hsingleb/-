<template>
	<view class="icons">
		<view v-for="(item,index) in icons_Data" :key="index" class="icons_item">
			<image class="item_image" :src="item.imgUrl" mode=""></image>
			<text>{{item.Text}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			icons_Data:Array
		}
	}
</script>

<style scoped>
	.icons{
		display: flex;
		flex-wrap: wrap;
		height: 300rpx;
		width: 100%;
	}
	.icons_item{
		height: 50%;
		width: 23%;
		overflow: hidden;
		padding: 8rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.item_image{
		height: 100%;
		width: 100%;
		border-radius: 40rpx;
	}
</style>