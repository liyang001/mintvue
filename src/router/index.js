import Vue from 'vue'
import Router from 'vue-router'
//import index from '@/components/index'

const Empty = { template: '<router-view></router-view>' }
const index = r => require.ensure([], () => r(require('@/components/index')), 'index');
Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '',
      component: index,
      meta : {menu : '首页'}
    }
  ]
})
