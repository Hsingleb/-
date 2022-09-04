<template>
	<view id="commodityList">

		<Commodity :commodityData='commodityList'></Commodity>
	</view>
	
	
</template>

<script>
	import Commodity from "./commodity.vue"
	export default{
		props:{
			commodityList:Array
		},
		data(){
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