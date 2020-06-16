import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
    {
      path: "line-simple",
      component:() => import("@/components/ChartComponent/LineSimple")
    },
    {
      path: "area-basic",
      component:() => import("@/components/ChartComponent/AreaChart")
    },{
      path: "bar-background",
      component:() => import("@/components/ChartComponent/BarBack")
    },{
      path: "pie-custom",
      component:() => import("@/components/ChartComponent/PieCustom")
    },{
      path: "scatter-simple",
      component:() => import("@/components/ChartComponent/ScatterSimple")
    }]
  },
 // {
 //   path: '/about',
  //  name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
 // }
 /* {
    path: '/line-simple',
    name: 'LineSimple',
    component:() => import("@/components/ChartComponent/LineSimple")   
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
