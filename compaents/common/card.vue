<template>
	<view>
		<view id="card_name">- {{cardTitle}} -</view>
	</view>
	
</template>

<script>
	export default{
		props:{
			cardTitle:String
		}
	}
</script>

<style scoped>
	#card_name{
		display:flex;
		justify-content: center;
		padding: 20rpx;
	}
</style>