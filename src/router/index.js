import Vue from 'vue'
import Router from 'vue-router'
import roundTurntable from '../components/roundTurntable.vue'
import Login from '../components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'roundTurntable',
      component: roundTurntable,
      meta: {
              needLogin: true //需要加校检判断的路由
            },
     },
     {
       path: '/login',
       name: 'Login',
       component: Login,
       },

	 {
	   path: '/info',
	   name: 'prizeInfo',
	   // route level code-splitting
	   // this generates a separate chunk (about.[hash].js) for this route
	   // which is lazy-loaded when the route is visited.
	   component: () => import(/* webpackChunkName: "about" */ '../components/prizeInfo.vue')
	 }
  ]
})
