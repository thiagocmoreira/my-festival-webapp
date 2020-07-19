
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Início', component: () => import('pages/IndexPage.vue') },
      { path: 'configs', name: 'Configurar festival', component: () => import('pages/FestivalConfigsPage.vue') },
      { path: 'headliners', name: 'Headliners', component: () => import('pages/HeadlinersPage.vue') }
    ]
  },
  {
    path: '/lineup',
    component: () => import('layouts/LineupLayout.vue'),
    children: [
      { path: '', name: 'Lineup', component: () => import('pages/LineupPage.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404Page.vue')
  })
}

export default routes
