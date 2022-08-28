<template>
	<view class="Banner">
		<image class="Banner_img" :src="BannerImgUrl"></image>
	</view>
	
</template>

<script>
	export default{
		props:{
			BannerImgUrl:String
		}
	}

</script>

<style>
	.Banner{
		width: 100%;
		height:350rpx;
	}
	.Banner_img{
		height:350rpx;
		width: 100%;
	}
</style>