import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import MyAccount from '../views/dashboard/MyAccount.vue'
import MyLeads from '../views/dashboard/Leads.vue'
import AddLead from '../views/dashboard/AddLead.vue'
import MyLead from '../views/dashboard/Lead.vue'
import EditLead from '../views/dashboard/EditLead.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta : {
      requireLogin  : true
    }
  },
  {
    path: '/dashboard/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta : {
      requireLogin  : true
    }
  },
  {
    path: '/dashboard/leads',
    name: 'MyLeads',
    component: MyLeads,
    meta : {
      requireLogin  : true
    }
  },
  {
    path: '/dashboard/leads/add',
    name: 'AddLead',
    component: AddLead,
    meta : {
      requireLogin  : true
    }
  },
  {
    path: '/dashboard/leads/:id',
    name: 'MyLead',
    component: MyLead,
    meta : {
      requireLogin  : true
    }
  },
  {
    path: '/dashboard/leads/:id/edit',
    name: 'EditLead',
    component: EditLead,
    meta : {
      requireLogin  : true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated){
    next('/log-in')
  }
  else{
    next()
  }
})

export default router
