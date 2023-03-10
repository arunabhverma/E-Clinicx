import React from 'react'

const AdminDashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const VisitType = React.lazy(() => import('./views/visitType'))
const Speciality = React.lazy(() => import('./views/speciality'))
const Education = React.lazy(() => import('./views/education'))
const SpecialInterest = React.lazy(() => import('./views/specialInterest'))

const routes = [
  { path: '/admin', name: 'Admin', element: AdminDashboard },
  { path: '/admin/dashboard', name: 'Admin Dashboard', element: AdminDashboard },
  { path: '/admin/settings/visitType', name: 'Admin Dashboard', element: VisitType },
  { path: '/admin/settings/speciality', name: 'Admin Dashboard', element: Speciality },
  { path: '/admin/settings/education', name: 'Admin Dashboard', element: Education },
  { path: '/admin/settings/specialInterest', name: 'Admin Dashboard', element: SpecialInterest },
]

export default routes
