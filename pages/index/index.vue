<template>
	<view class="content">
		<!-- #ifdef MP-WEIXIN -->			
			<view id="weixinHead">
				平喜喜
				<view class="iconfont" id="HeadConst1">&#xe800</view>
				<view class="iconfont" id="HeadConst2">&#xe629</view>
			</view>
		<!-- #endif -->
		
		<scroll-view scroll-x="true" class="catalogue_list" 
			:scroll-into-view='TopID'>
			<view v-for="(item,index) in catalogue " 
				:key="index"
				 class="catalogue_item"
				 @click="click_catalogue(index)"
				 :id="'top'+index">
				 
				 
				<text :class='indexActive === index ? "f-active-color":"f-color"'>{{item.name}}</text>
			
			</view>
		</scroll-view>
	

		<swiper @change="onChangeTab" :current="indexActive"
		:style="'height:'+clentHeight+'px;'">
				
				<swiper-item v-for="(item,index) in newCatalogue" :key="index">	
					<scroll-view scroll-y="true" 
					:style="'height:'+clentHeight+'px;'"
					@scrolltolower='loadMoreData(index)'>	
					
					<!-- 首页栏 -->
					<block v-if="item.data.length>0">
						<block v-for="(x,i) in item.data" :key="i">	
						
						
							<IndexSwiper v-if="x.type==='indexSwiperData'" :indexSwiperData='x.data'></IndexSwiper>
							<template v-if="x.type==='recommend'">
								<Recommend :recommendData='x.data'></Recommend>
								<Card cardTitle="猜你喜欢"></Card>
							</template>
							
							<CommodityList v-if="x.type==='commodityListData'" :commodityList='x.data'></CommodityList>

							
							
							<Banner v-if="x.type==='Banner_img'" :BannerImgUrl='x.data'></Banner>
								
							<template v-if="x.type==='icons_Data'">
								<Icons :icons_Data='x.data'></Icons>
								<Card cardTitle="热销爆品"></Card>
							</template>
								
							<Hot v-if="x.type==='commodityList'" :commodityList='x.data'></Hot>
							
							
							
							

							
						</block>
					</block>
					<view v-else>暂时未搭建好</view>
					

					
					<view class="load_text">{{item.loadText}}</view>
				</scroll-view>				
				
			</swiper-item>
		</swiper>
		

			
		
		<!-- 热销品牌
		<!-- <Banner></Banner>
		<!-- <Icons :icons_Data='icons_Data'></Icons>
		<Card cardTitle="热销爆品"></Card>
		<!-- <Hot></Hot> -->
		
		<!-- 推荐品牌 -->
		<!-- <Card cardTitle="推荐店铺"></Card>
		<Nominate></Nominate> -->
		
		<!-- <Card cardTitle="为你推荐"></Card> -->
	</view>
</template>

<script>
	import IndexSwiper from "@/compaents/index/IndexSwiper.vue"
	import Recommend from "@/compaents/index/Recommend.vue"
	import Card from "@/compaents/common/card.vue"
	import CommodityList from "@/compaents/common/CommodityList.vue"
	import Banner from "@/compaents/index/Banner.vue"
	import Icons from "@/compaents/index/icons.vue"
	import Hot from "@/compaents/index/Hot.vue"
	import Nominate from "@/compaents/index/Nominate.vue"
	
	
	export default {
		data() {
			return {
				TopID:"top0",		//内容板块id
				clentHeight:0,		//内容板块高度		
				indexActive:0,  	//选中的索引		
				catalogue:[],				//存放
				newCatalogue:[],			
				BannerImgUrl:''			//存放Banner组件的图片URL
			}
		},
		components:{
			IndexSwiper,
			Recommend,
			Card,
			CommodityList,
			Banner,
			Icons,
			Hot,
			Nominate
		},
		methods: {
			//请求数据
			getIndexData(){
				uni.request({
					url:"http://192.168.1.2:3000/api/index_list/1/data/1",
					success:(res)=>{
						let data = res.data.data
						this.catalogue = data.topBar
						this.newCatalogue = this.initData(data)
					}
				})
			},
			initData(res){
				let arr = []
				for(let i=0;i<this.catalogue.length;i++){
					let obj = {
						data:[],
						load:"firse",
						loadText:'快拉呀~快拉呀~'
					}
					//获取首次数据
					if(i==0){
						obj.data = res.data
						obj.load ='last'
						
					}
					arr.push(obj)
				}
				return arr
			},
			//导航栏滑动效果
			click_catalogue(index){
				if(this.indexActive===index){
					return
				}
				else{
					this.indexActive = index
					this.TopID = 'top'+index
					if(this.newCatalogue[index].load==='firse'){
						this.addPlateData(index)
						this.newCatalogue[index].load='last'
					}
				}
			},
			//内容栏与导航栏一致效果
			onChangeTab(e){
				this.click_catalogue(e.detail.current)
			},
			//切换导航栏的时候get数据
			addPlateData(index,callback){
				
				let id = this.catalogue[index].id
				
				let page = Math.ceil(this.newCatalogue[index].data.length/3)+1;
				console.log(page);
				uni.request({
					url:"http://192.168.1.2:3000/api/index_list/"+id+"/data/"+page+"",
					
					success: (res) => {
						if(res.statusCode!=200){
							return
						}else{
							let data = res.data.data
							this.newCatalogue[index].data = [...this.newCatalogue[index].data,...data]

						}
					}
				})
				console.log(this.newCatalogue[index].data.length);
				if(typeof callback =='function'){
					callback()
				}
			},
			//得到手机视口大小  兼容性
			getClientHeght(){
				const res = uni.getSystemInfoSync();
				if(res.platform==="ios"){
					return 22+res.statusBarHeight;   //ios状态栏是44px
				}else if(res.platform==="android"){
					return	0		//安卓状态栏是48px
				}else{
					return 22+res.statusBarHeight		//小程序刘海机要去除 状态栏 以及小程序导航栏
				}
			},
			//上拉请求更多的数据
			loadMoreData(index){
				this.newCatalogue[index].loadText = "我在快马加鞭的找东西了。。。"
				
				this.addPlateData(1,
					()=>{
						this.newCatalogue[index].loadText = "我在快马加鞭的找东西了。。。"
					}
				)
				
			}
		},
		
		onLoad() {
			this.getIndexData()
		},
		
		onReady(){		
			
			//设置窗口大小，并兼容刘海非刘海
			uni.getSystemInfo({
				success:(res)=>{
					this.clentHeight = res.windowHeight - uni.upx2px(80)-this.getClientHeght()
				}
			})
			
		}
	}
</script>

<style>
#weixinHead{
	margin-top: 10%;
	text-align: center;
	
	
}
#HeadConst1{
	float: left;
}
#HeadConst2{
	float: right;
}
.catalogue_list{
	height: 80rpx;
	width:100%;
	white-space: nowrap;
}
.catalogue_item{
	padding: 16rpx;
	display: inline-block;
}
.f-active-color{
	font-size: 30rpx;
	padding: 4rpx;
	border-bottom: 6rpx solid #49BDFB;
}

.load_text{
	border-top: 2rpx solid #636263;
	line-height: 60rpx;
	text-align: center;
}
</style>
