import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Console from '@/view/Console'
import DashBoard from '@/view/DashBoard'
import Project from '@/view/Project'
import Member from '@/view/Member'

import Login from '@/view/Login'

import Api from '@/view/api/Api'
import ApiList from '@/view/api/ApiList'
import ApiAdd from '@/view/api/ApiAdd'
import Environment from '@/view/Environment'
import ApiMember from '@/view/api/Member'
import Dynamic from '@/view/api/Dynamic'
import ApiProject from '@/view/api/Project'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/api',
      name: 'api',
      component: Api,
      children: [{
        path: 'project',
        name: 'apiProejct',
        component: ApiProject
      }, {
        path: 'member',
        name: 'apimember',
        component: ApiMember
      }, {
        path: 'environment',
        name: 'environment',
        component: Environment
      }, {
        path: 'dynamic',
        name: 'dynamic',
        component: Dynamic
      }, {
        path: 'list',
        name: 'apilist',
        component: ApiList
      }, {
        path: 'add',
        name: 'apiAdd',
        component: ApiAdd
      }]
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
