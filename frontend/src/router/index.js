import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/main/MainPage.vue'
import SigninPage from '../views/signin/SigninPage.vue'

// component of MainPage
import MainHome from '../components/main/MainHome.vue'
import Documents from '../components/main/Documents.vue'
import Members from '../components/main/Members.vue'
import Communication from '../components/main/Communication.vue'
import Play from '../components/main/Play.vue'
import MyPage from '../components/main/MyPage.vue'


const routes = [
  {
    path: '/MainPage',
    name: 'MainPage',
    component: MainPage,
    children : [
      { path: '/home',name: '/home', component: MainHome, },
      { path: '/Documents', name: '/Documents', component: Documents, },
      { path: '/Members', name: '/Members', component: Members, },
      { path: '/Communication', name: '/Communication', component: Communication, },
      { path: '/Play', name: '/Play', component: Play, },
      { path: '/MyPage', name: '/MyPage', component: MyPage, },
    ]
  },
  {
    path: '/SigninPage',
    name: 'SigninPage',
    component: SigninPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
