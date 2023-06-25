import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contacts from '../views/Contacts.vue'
import ContactDetails from '../views/ContactDetails.vue'
import ContactEdit from '../views/ContactEdit.vue'
import Chart from '../cmps/Chart.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/contact/:id',
      name: 'details',
      component: ContactDetails,
    },
    {
      path: '/contact/edit/:id',
      name: 'edit',
      component: ContactEdit,
    },
    {
      path: '/stats',
      name: 'statistics',
      component: Chart,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
