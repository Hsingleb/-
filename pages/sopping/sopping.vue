<template>
	<view>
		
		<template v-if="shopping_listData.length>0">
		
		
		<!-- 导航栏 -->
		<uni-nav-bar statusBar="true"
		:rightText="isNavBer==false?'编辑':'完成'"
		@clickRight="isNavBer = !isNavBer"
		fixed=true
		title="我的购物车"></uni-nav-bar>

		
		
		<!-- 商品内容 -->
		<view class="shop_list">
			<view class="Shop_item" v-for="(item,index) in shopping_listData" :key="index">
				<label class="radio" >
					<radio value="" color="#FF3333" :checked="item.checked"></radio>
				</label>
				<image class="shop_item_img" :src="item.imgUrl"></image>
				
				<view class="shop_item_textBox">
					<view class="shop_item_name">{{item.name}}</view>
					<view class="shop_item_size">{{item.size}}</view>
					<view class="shop_item_Price">
						<view>￥{{item.price}}</view>
						<view>{{item.num}}</view>
					</view>
				</view>
				
			</view>
		</view>
		
		
		<!-- 底部 -->
		<view class="shop_foot">
			<label class="radio foot_radio" @tap="checkedAllFn"> 
				<radio color="#FF3333" :checked="checkedAll()" >全选</radio>
			</label>
			<view class="foot_textBox">
				<view class="foot_price">合计：
					<text>￥0</text>
				</view>
				<view class="foot_num">结算(0)</view>
			</view>
		</view>
		
		</template>
		
		<template v-else>
			
			<uni-nav-bar statusBar="true"
			fixed=true
			title="我的购物车"></uni-nav-bar>
			<view class="shop_elseBox_text">
				
				
				购物车空空如也~~
				
			</view>
		</template>
		
	</view>
</template>

<script>
	import { mapState,mapActions,mapGetters} from 'vuex'
	
	
	export default {
		data() {
			return {
				isNavBer:false,

			}
		},
		methods: {
			...mapActions(['checkedAllFn']),
			...mapGetters(["checkedAll"])
			
		},
		computed:mapState({
			shopping_listData:state => state.cart.list	
		}),

		
	}
</script>

<style scoped>
.Shop_item{
	display: flex;
	padding: 10rpx;
	align-items: center;
	margin: 10rpx;
	background-color: #f7f5f7;
}
.shop_item_img{
	height: 180rpx;
	width: 180rpx;
}
.shop_item_textBox{
	flex: 1;
	padding-left: 15rpx;
}
.shop_item_size{
	font-size: 24rpx;
	color:#aaa9aa;
}
.shop_list{
	padding-bottom: 100rpx;
}

.shop_item_Price{
	display: flex;
	justify-content: space-between;
}
.shop_foot{
	border-top: 2rpx solid #aaa9aa;
	background-color:#FFFFFF;
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100rpx;
	justify-content: space-between;
	align-items: center;
}
.foot_radio{
	padding-left: 20rpx; 
}
.foot_textBox{
	display: flex;
	/* justify-content: space-between; */
}
.foot_price{
	line-height: 100rpx;
	text-align: center;
	padding: 0rpx 20rpx;
	font-size: 36rpx;
}
.foot_price>text{
	color: #49BDFB;
	
}

.foot_num{
	background-color: #49BDFB;
	color: #FFFFFF;
	line-height: 100rpx;
	padding: 0 20rpx;
}
.shop_elseBox_text{
	background-color: #f7f7f7;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 0;
	bottom: 0;
	top: 0;
	right: 0;
}
</style>
