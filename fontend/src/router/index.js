import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import Login from '@/pages/Login'
import Amcharts from '@/pages/Amcharts'
import TimeLine from '@/pages/TimeLine'
import ProjectsDetail from '../pages/ProductDetail'
import CreateProject from '../pages/CreateProject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home Page',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login Page',
      component: Login
    },
    {
      path: '/amcharts',
      name: 'Test Amcharts',
      component: Amcharts
    },
    {
      path: '/timeline',
      name: 'TimeLine',
      component: TimeLine
    },
    {
      path: '/project/:id',
      name: 'ProjectsDetail',
      component: ProjectsDetail,
      params: ':id'
    },
    {
      path: '/edit-project/:id',
      name: 'create project',
      component: CreateProject
    }
  ]
})
