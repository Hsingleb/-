<template>
	<swiper circular="true" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item v-for="(x,i) in indexSwiperData">
			<view class="swiper-item">
				<image class="images_swiper" :src="x.imgurl" mode=""></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default{
		props:{
			indexSwiperData:Array
		}
	}
</script>

<style scoped>
	.images_swiper{
		height: 400rpx;
		width: 100%;
	}
	swiper{
		height: 400rpx;
		width: 100%;
		border-radius:50rpx;
		overflow:hidden;
	}
</style>