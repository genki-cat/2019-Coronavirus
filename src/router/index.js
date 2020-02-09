import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import CMap from '@/components/Coronavirus_Map'
import CCase from '@/components/Coronavirus_Case'
import CApps from '@/components/Coronavirus_Apps'
import CSpupport from '@/components/Coronavirus_Support'
import CUnity from '@/components/Coronavirus_Unity'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path:'/',
        name:'index',
        component:CMap
    },
    {
      path: '/index',
      name: 'CoronavirusMap',
      component: CMap
    },
    {
        path:'/cases',
        name:'CoronavirusCase',
        component:CCase
    },
    {
        path:'/apps',
        name:'CoronavirusNews',
        component:CApps
    },
    {
        path:'/support',
        name:'CoronavirusSupport',
        component:CSpupport
    },
    {
        path:'/unity',
        name:'CoronavirusUnity',
        component:CUnity
    }
  ]
})
