import { createRouter, createWebHashHistory  } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory (import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
      meta: { title: 'Services'}
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: { title: 'Blog'}
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/TeamView.vue'),
      meta: { title: 'Team'}
    },
    {
      path: '/careers',
      name: 'careers',
      component: () => import('../views/CareersView.vue'),
      meta: { title: 'Careers'}
    }
  ]
})

router.afterEach((to, from) => {
  document.title = `Dream Development | ${to.meta.title}` || 'Dream Development';
});

export default router
