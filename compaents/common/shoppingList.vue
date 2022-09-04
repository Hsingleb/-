<template>
	<view>
		<view class="shop_title">
			<view v-for="(item,index) in shoplist.data"
				class="title_item"
				:key="index"
				@tap="changeTap(index)"
			>
				<view :class="shoplist.currentIndex==index ? 'f-active-color' : 'f-color'">{{item.name}}</view>
				<view class="item_icon">
					<view class="iconfont up "
						:class=" item.status==1 ? 'f-active-color' : 'f-color'">&#xe76e</view>
					<view class="iconfont down"
						:class=" item.status==2 ? 'f-active-color' : 'f-color'"	>&#xe772</view>
				</view>
			</view>
			
			
		</view>
		<Line_div></Line_div>
		
		<CommodityList :commodityList='dataList'></CommodityList>
	</view>
</template>

<script>
	import myhttp from "@/common/api/request.js"
	import Line_div from "@/compaents/common/Line.vue"
	import CommodityList from "@/compaents/common/CommodityList.vue"
	
	export default{
		props:{
			searchText:String
		},
		components:{
			Line_div,
			CommodityList
		},
		data(){
			return{
				dataList:[],
				shoplist:{
					currentIndex:0,
					data:[
						{name:"价格",status:1,key:"newPrice"},
						{name:"折扣",status:0,key:"discount"},
						{name:"品牌",status:0}
					]
				}	
			}
		},
		computed:{
			orderBy(){
				let obj = this.shoplist.data[this.shoplist.currentIndex]
				let val = obj.status==1 ?  "asc" : "desc"
				return {
					[obj.key]:val
				}
			}
		},
		methods:{
			getSearchData(){
				myhttp.request({
					
					url:"/goods/search",
					data:{
						name:this.searchText,
						...this.orderBy
					}
				}).then((res)=>{
					this.dataList=res
				}).catch(()=>{
					console.log("请求失败")
				})
			},
			//修改导航栏的颜色状态
			changeTap(index){
				
				let id = this.shoplist.currentIndex
				
				let item = this.shoplist.data[index]
				
				this.shoplist.currentIndex = index
				if(id==index){
					item.status= item.status==1 ? 2:1
				}else{
					item.status=1
					this.shoplist.data[id].status=0
				}
				
				this.getSearchData()
			}
		},
		mounted(){
			this.getSearchData()
		}
		
	}
</script>

<style scoped>
	.shop_title{
		display: flex;
		justify-content: center;
	}
	.title_item{
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		height: 80rpx;
	}
	.item_icon{
		position: relative;
		margin-left: 8rpx;
	}
	.iconfont{
		position: absolute;
		left: 0px;
		width:10rpx;
		height:8rpx;
	}
	.up{
		top: -24rpx;
	}
	.down{
		top: -8rpx;
	}
</style>