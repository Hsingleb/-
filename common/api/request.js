
export default{
	common:{
		baseurl:"http://192.168.1.2:3000/api",
		data:{},
		header:{
			"content_Type":"application/json",
			"content_Type":"application/x-www-form-urlencoded"
		},
		method:"GET",
		dataType:"JSON"
	},
	request(options={}){
		uni.showLoading({
			title:"加载中",
			mask:true
		})
		options.url = this.common.baseurl+options.url
		console.log(options.url);
		options.data = options.data ||	this.common.data
		options.header = options.header ||	this.common.header
		options.method = options.method 	||	this.common.method
		options.dataType = options.dataType ||	this.common.dataType
		// console.log(options);
		return new Promise((res,rej)=>{
			uni.request({
				
				...options,
				success: (result) => {
					setTimeout(function(){
						uni.hideLoading()
					},1000)
					
					if(result.statusCode!=200){
						// console.log(rej())
						return rej()
					}else{
						let data =  result.data.data
						// console.log(data)
						res(data)
					}
					
				}
			})
		})
	}
}