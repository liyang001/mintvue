<template>
	<div id="home" class="page">
		<mt-swipe 
			:speed="300"
			:continuous="false"
			:prevent="false"
			:auto="0"
		>
		  <mt-swipe-item>
		  	<img src="../assets/images/1.jpg" alt="">
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../assets/images/2.jpg" alt="">
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../assets/images/3.jpg" alt="">
		  </mt-swipe-item>
		</mt-swipe>		
	</div>
</template>

<script>
	import {Swipe , SwipeItem} from 'mint-ui'
	export default {
		name : 'home',
		props : ['homePage'],
		data (){
			return {}
		},
		watch:{
			'$route':function(to,form){
				console.log(to,from)
			},
			homePage(val,oldVal){
				console.log(val,oldVal)
			}
		},
		components : {
			Swipe,
			SwipeItem
		},
		created(){
			this.init()
		},
		methods :{
			init(){
				console.log(this.homePage)
			}
		}
	}	
</script>
<style lang="less">
	@import '../css/common';
</style>