import Vue from 'vue'
import Router from 'vue-router'
import index from 'pages/index'

// 菜单页
import KnowledgeBase from 'pages/knowledge-base'
import Entertainment from 'pages/entertainment'
import PersonalHobby from 'pages/personal-hobby'
import AboutMe from 'pages/about-me'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/knowledge-base',
      name: 'KnowledgeBase',
      component: KnowledgeBase
    }, {
      path: '/entertainment',
      name: 'Entertainment',
      component: Entertainment
    }, {
      path: '/personal-hobby',
      name: 'PersonalHobby',
      component: PersonalHobby
    }, {
      path: '/about-me',
      name: 'AboutMe',
      component: AboutMe
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
