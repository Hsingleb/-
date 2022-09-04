<template>
	<view class="search">
		
		<Line_div></Line_div>
		
		<view class="search_item">
			
			<view class="search_title">
				<view>最近搜索</view>
				<view class="iconfont" @tap="deleteHistory()"
					v-if="historySearch.length>0"
				>&#xe6a0</view>
			</view>
			<view v-if="historySearch.length>0">
					<view class="search_Name" 
					v-for="(item,index) in historySearch" 
					:key="index"
					>
						{{item}}
					</view>
			</view>
			<view v-else style="text-align: center;">暂无搜索数据</view>
		</view>
		
		<view class="search_item">
			<view class="search_title">
				<view>热门搜索</view>
			</view>
			<view>
				<view class="search_Name">上衣</view>
				<view class="search_Name">冲锋衣</view>
			</view>
			
		</view>
		
		
		
	</view>
</template>

<script>
	import Line_div from "@/compaents/common/Line.vue"
	
	export default {
		components:{
			Line_div
		},
		data() {
			return {
				searchText:'',
				historySearch:[]
			}
		},
		methods: {
			//判断搜索内容关键词并跳转
			search(){
				if(this.searchText==''){
					return uni.showToast({
						title:"关键词不能为空",
						icon:"none"
					})
				}else{
				this.addSearch()
				uni.navigateTo({
						url:"/pages/search_list/search_list?searchText="+this.searchText+""
					})
				}
			},
			//添加历史搜索数据
			addSearch(){
				let index = this.historySearch.indexOf(this.searchText)
				if(index!=-1){
					
					this.historySearch.unshift(this.historySearch.splice(index,1)[0])
				}else{
					this.historySearch.unshift(this.searchText)
				}
				
				uni.setStorage({
					key:"historySearchText",
					data:JSON.stringify(this.historySearch)
				})	
			},
			deleteHistory(){
				console.log(11);
				uni.showModal({
					title:"提示",
					content:"是否确定删除历史记录",
					success: (res) => {
						if(res.confirm){
							this.historySearch = []
							uni.setStorage({
								key:"historySearchText",
								data:JSON.stringify(this.historySearch)
							})	
						}
					}
				})
				
			}
		},
		onLoad(){
			uni.getStorage({
				key:"historySearchText",
				success: (res) => {
					this.historySearch = JSON.parse(res.data)
				}
			})
		},
		onNavigationBarButtonTap(){
			
			this.search()
			
		},
		onNavigationBarSearchInputChanged(e){
			this.searchText = e.text
		},
		onNavigationBarSearchInputConfirmed(){
			this.search()
		}
	}
</script>

<style>
.search_item{
	padding: 20rpx;
}
.search_title{
	display: flex;
	justify-content:space-between;
}
.search_Name{
	padding: 4rpx 20rpx;
	display: inline-block;
	border-radius: 25px;
	background-color:#f1f3f9;
	margin: 8rpx;
	color: #cdcdcd;
}
</style>
