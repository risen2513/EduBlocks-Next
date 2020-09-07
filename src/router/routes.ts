import Dashboard from '../views/Dashboard.vue'
import SignIn from '../views/SignIn.vue'
import NotFound from '../views/NotFound.vue'

export default [
  { path: '/', component: Dashboard, name: 'Dashboard' },
  { path: '/sign-in', component: SignIn, name: 'SignIn' },
  { path: '/:catchAll(.*)', component: NotFound, name: 'NotFound' }
]


