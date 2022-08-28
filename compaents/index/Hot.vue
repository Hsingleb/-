<template>
	<view>
		<view>
			<Commodity :commodityData="commodityList"
			itemW="230rpx" itemH="300rpx"
			></Commodity>
		</view>
	</view>
</template>

<script>
	import Commodity from "../common/commodity.vue"
	
	export default{
		props:{
			commodityList:Array
		},
		data (){
			return{
			
			}
		},
		components:{
			Commodity
		}
	}
</script>

<style>
</style>