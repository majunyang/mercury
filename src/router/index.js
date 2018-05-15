import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Console from '@/view/Console'
import DashBoard from '@/view/DashBoard'
import Project from '@/view/Project'
import Member from '@/view/Member'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/console',
      name: 'console',
      component: Console,
      children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: DashBoard
      }, {
        path: 'project',
        name: 'project',
        component: Project
      }, {
        path: 'member',
        name: 'member',
        component: Member
      }]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to !== undefined) {
    if (to.path === '/console' || to.path === '/console/') {
      next({
        path: '/console/dashboard'
      })
    } else {
      next()
    }
  }
})

export default router
