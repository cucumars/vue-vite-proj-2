import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/my-works',
      name: 'my-works',
      component: () => import('../views/MyWorkView.vue')
    },
    {
      path: '/my-works-1',
      name: 'my-works-1',
      component: () => import('../views/MyWorkOneView.vue')
    },
    {
      path: '/todo-list-fixed',
      name: 'todo-list-fixed',
      component: () => import('../views/TodoItemView.vue')
    },
    {
      path: '/todo-list-active',
      name: 'todo-list-active',
      component: () => import('../views/TodoListView.vue')
    },
    {
      path: '/compute-ex1',
      name: 'compute-ex1',
      component: () => import('../views/ComputeEx1View.vue')
    },
    {
      path: '/composition-ex1',
      name: 'composition-ex1',
      component: () => import('../views/CompositionEx1View.vue')
    },
    {
      path: '/comp-api-ex1',
      name: 'comp-api-ex1',
      component: () => import('../views/CompApiEx1View.vue')
    },
    {
      path: '/ex4',
      name: 'ex4',
      component: () => import('../views/Ex4View.vue')
    },
    {
      path: '/ex5',
      name: 'ex5',
      component: () => import('../views/Ex5View.vue')
    },
    {
      path: '/ex6-classes',
      name: 'ex6-classes',
      component: () => import('../views/Ex6-BindingHTMLClassesView.vue')
    },
  ]
})

export default router
