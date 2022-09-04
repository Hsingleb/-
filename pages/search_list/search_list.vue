<template>
	<view>
		<ShoppingList :searchText="searchText"></ShoppingList>
	</view>
</template>

<script>
	import ShoppingList from "@/compaents/common/shoppingList.vue"
	
	
	export default {
		components:{
			ShoppingList
		},
		data() {
			return {
				searchText:""
			}
		},
		methods: {
			
		},
		onLoad(e) {
			// #ifdef APP-PLUS  
				var webView = this.$mp.page.$getAppWebview(); 
				webView.setTitleNViewSearchInputText(e.searchText)  
			// #endif
			
			
			this.searchText = e.searchText
		}
	}
</script>

<style>

</style>
