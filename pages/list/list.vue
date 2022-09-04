<template>
	<view>
		<Line_div></Line_div>
		
		<view class="list">
			<!-- 左侧 -->
			<scroll-view scroll-y="true" class="list_left" :style="'height:'+clentHeight+'px;'">
				<view v-for="(item,index) in leftData" :key="item.id" 
				class="left_item" 
				@tap="toLeft(index,item.id)"
				>
				<!--:class="activeLeftIndex === i ? 'item_name_active':' '"  -->
					<view class="item_name"
					:class="activeLeftIndex === index ? 'item_name_active':' '"
					>{{item.name}}</view>
				</view>
			</scroll-view>
			<!-- 右侧  -->
			<scroll-view scroll-y="true" class="list_right" :style="'height:'+clentHeight+'px;'">
				<view class="right_list"
				v-for="(item,index) in rightData"
				:key="index"
				>
					<view class="list_title">
						{{item.name}}
					</view>
					
					<block v-for="(item,index) in item.data">
						<view class="right_content" >
							<view class="content_item">
								<image class="right_item_img" :src="item.url"></image>
								<view class="right_item_name">{{item.name}}</view>
							</view>			
						</view>
					</block>
					
				</view>
				
				
				
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Line_div from "@/compaents/common/Line.vue"
	import myhttp from "../../common/api/request.js"
	
	export default {
		components:{
			Line_div
		},
		data() {
			return {
				clentHeight:0,
				activeLeftIndex:0,
				leftData:[],
				rightData:[]
			}
		},
		methods: {
			getListData(id){
				if(id === this.activeLeftIndex+1) return
				myhttp.request({
					url:"/goods/list"
				}).then((res)=>{
					
					let leftData = []
					let rightData = []
					res.forEach((item,index)=>{
						leftData.push({name:item.name,
						'id':item.id})
						
						if(item.id==this.activeLeftIndex+1){
							rightData.push(
								...item.data
							)
						}
						
					})
					this.leftData = leftData
					this.rightData = rightData
					// console.log(rightData);
					
					
				}).catch(()=>{
					
				})
			},
			getClientHeght(){
				const res = uni.getSystemInfoSync();
				if(res.platform==="ios"){
					return 22+res.statusBarHeight;   //ios状态栏是44px
				}else if(res.platform==="android"){
					return	0		//安卓状态栏是48px
				}else{
					return 22+res.statusBarHeight	//小程序刘海机要去除 状态栏 以及小程序导航栏
				}
			},
			
			toLeft(index,id){
				this.getListData(id)
				this.activeLeftIndex = index
				
			}
		},
		onReady(){

			//设置窗口大小，并兼容刘海非刘海
			uni.getSystemInfo({
				success:(res)=>{
					this.clentHeight = res.windowHeight-2-this.getClientHeght()
				}
			})
			
		},
		onLoad(){
			this.getListData()
		},
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
					url:"/pages/search/search"
				})
		}
	}
</script>

<style scoped>
.list{
	display:flex;
}

.list_left{
	width: 200rpx;
}

.list_right{
	flex:1;
}
.left_item{
	border-bottom: 2px solid #FFF;
	font-size: 30rpx;
	background-color: #F7F7F7;
}
.item_name{
	padding:20rpx 6rpx;
	text-align: center;
}
.item_name_active{
	font-weight: bold;
	background-color: #FFF;
	border-left: 8rpx solid #4ccfff;
}
.list_title{
	font-weight: bold;
	padding: 20rpx 0;
}
.right_content{
	display:flex;
	flex-wrap: wrap;
	padding-left: 10rpx;
	display: inline-block;
}
.content_item{
	width: 150rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10rpx 10rpx;
}
.right_item_img{
	height: 150rpx;
	width: 150rpx;
}
.right_item_name{
	padding: 10rpx;
	text-align: center;
}


</style>
