<template>
  <div id="page">
    <mt-tab-container  v-model="selected" >
      <mt-tab-container-item id="btn0">
          <home homePage="123"></home>
      </mt-tab-container-item>
      <mt-tab-container-item id="btn1">
        <mt-cell  title="tab-container2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="btn2">
        <mt-cell  title="tab-container3"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="btn3">
        <mt-cell  title="tab-container4"></mt-cell>
      </mt-tab-container-item>      
    </mt-tab-container>
    <mt-tabbar :selected="selected" fixed v-model="selected">
      <mt-tab-item  
          v-for ="(item,index) in iconData" 
          :id="'btn'+index" 
          :key="'btn'+index" 
          :class="{active : item.isActive}">
          <i slot="icon"  v-bind:class="{[item.className] : true,  active : item.isActive} " ></i>
          {{item.title}}
      </mt-tab-item>
    </mt-tabbar>  
</div>
</template>

<script>
import { Tabbar, TabItem , Cell ,TabContainer, TabContainerItem } from 'mint-ui'
import home from '@/page/home'
export default {
  watch : {
      selected : function(val,oldVal){
        this.routerKey = this.$route.path;
          this.iconData.map((item,index)=>{
              item.isActive = false;
              if(('btn'+index) == val){
                item.isActive = true;
              }
          })
      },
      '$route':function(to,form){
          //console.log(to,form)
      }
  },
  data () {
    return {
      routerKey : '',
      iconData : [
          {title : '千千',isActive : true,className : 'u-icon-home'},
          {title : '万万',isActive : false,className : 'u-icon-fly'},
          {title : '林林',isActive : false,className : 'u-icon-circle'},
          {title : '总总',isActive : false,className : 'u-icon-watch'},
      ],
      selected : 'btn0',
    }
  },
  components:{
    Tabbar,
    TabItem,
    Cell,
    TabContainer,
    TabContainerItem,
    TabContainer,
    home
  },
  methods : {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
@import '../css/common';
</style>
