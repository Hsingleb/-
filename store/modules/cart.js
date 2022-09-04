export default{
	state:{
		list:[
			{
				checked:false,
				id:1,
				name:"限时秒杀,nike原价鞋，少量放货",
				size:"38",
				imgUrl:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/890482188/O1CN01KUBkxy1S29MiypUGo_!!890482188.jpg_580x580Q90.jpg_.webp",
				price:"679",
				num:1,
			},
			{	
				checked:false,
				id:2,
				name:"限时秒杀,nike原价鞋，少量放货",
				size:"38",
				imgUrl:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/890482188/O1CN01KUBkxy1S29MiypUGo_!!890482188.jpg_580x580Q90.jpg_.webp",
				price:"679",
				num:1,
			},
		],
		selectList:[]
	},
	getters:{
		// 判断是否全选
		checkedAll(state){

			return state.list.length == state.selectList.length
		}
	},
	mutations:{
		//全选
		checkAll(state){
			
			state.selectList = state.list.map(item=>{
				item.checked = true
				return item.id
			})
		},
		//全不选
		uncheckAll(state){
			state.selectList = []
			state.list.forEach(item=>{
				item.checked = false
			})
		}
	},
	actions:{
		checkedAllFn({commit,getters}){
			getters.checkedAll ? commit('uncheckAll') : commit('checkAll')
		}
	}
}