import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Navigation from '@/components/Navigation'
import LoginPage from '@/pages/Login'
import ShowtimePage from '@/pages/ShowtimePage'
import MatchDetailPage from '@/pages/MatchDetailPage'
import MatchDetailOwnPage from '@/pages/MatchDetailOwnPage'
import RegisterPage from '@/pages/Register'
import RegisterSuccessPage from '@/pages/RegisterSuccess'
import CreateMatch from '@/pages/CreateMatch'
import MatchRegister from '@/pages/MatchRegister'
import MatchJoin from '@/pages/MatchJoined'
import MatchCreate from '@/pages/MatchCreated'
import MatchManagement from '@/pages/MatchManagement'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Navigation',
    //   component: Navigation
    // },
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: LoginPage
    // },
    // {
    //   path: '/',
    //   name: 'Register',
    //   component: RegisterPage
    // },   
    {
      path: '/RegisterSuccess',
      name: 'RegisterSuccess',
      component: RegisterSuccessPage
    },
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/showtime',
      name: 'ShowtimePage',
      component: ShowtimePage
    },
    {
      path: '/match-detail',
      name: 'MatchDetailPage',
      component: MatchDetailPage
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage
    },
    {
      path:'/CreateMatch',
      name: 'CreateMatch',
      component: CreateMatch
    },
    {
      path: '/MatchRegister',
      name: 'MatchRegister',
      component: MatchRegister
    },
    {
      path: '/MatchJoin',
      name: 'MatchJoin',
      component: MatchJoin
    },
    {
      path: '/MatchCreate',
      name: 'MatchCreate',
      component: MatchCreate
    },
    {
      path: '/match-management',
      name: 'MatchManagement',
      component: MatchManagement
    },
    {
      path: '/match-detail-own',
      name: 'MatchDetailOwnPage',
      component: MatchDetailOwnPage
    }
  ]
})