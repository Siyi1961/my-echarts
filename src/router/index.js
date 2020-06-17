import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Chart',
    component: () => import("@/views/Home"),
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import("@/views/Chart"),
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
    },{
      path: "bar-simple",
      component:() => import("@/components/ChartComponent/BarSimple")
    },{
      path: "pie-simple",
      component:() => import("@/components/ChartComponent/PieSimple")
    },{
      path: "map-simple",
      component:() => import("@/components/ChartComponent/MapSimple")
    },{
      path: "radar-simple",
      component:() => import("@/components/ChartComponent/RadarSimple")
    },{
      path: "funnel-simple",
      component:() => import("@/components/ChartComponent/FunnelSimple")
    },{
      path:"/chart",
      redirect:"/chart/line-simple"
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
