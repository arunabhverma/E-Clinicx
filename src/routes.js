import React from 'react'

// const HospitalDashboard = React.lazy(() => import('./global/views/dashboard/Dashboard'))
const Home = React.lazy(() => import('../src/home'))

const HospitalDashboard = React.lazy(() => import('../src/hospital/views/dashboard/Dashboard'))
const LabDashboard = React.lazy(() => import('../src/lab/views/dashboard/Dashboard'))
const ScanCenterDashboard = React.lazy(() => import('../src/scanCenter/views/dashboard/Dashboard'))
const AmbulanceDashboard = React.lazy(() => import('../src/ambulance/views/dashboard/Dashboard'))

const Admin = React.lazy(() => import('./admin'))
const Hospital = React.lazy(() => import('./hospital'))
const Lab = React.lazy(() => import('./lab'))
const ScanCenter = React.lazy(() => import('./scanCenter'))
const Ambulance = React.lazy(() => import('./ambulance'))

const Colors = React.lazy(() => import('./global/views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./global/views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./global/views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./global/views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./global/views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./global/views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./global/views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./global/views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./global/views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./global/views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./global/views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./global/views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./global/views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./global/views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./global/views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./global/views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./global/views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./global/views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./global/views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./global/views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() =>
  import('./global/views/forms/floating-labels/FloatingLabels'),
)
const FormControl = React.lazy(() => import('./global/views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./global/views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./global/views/forms/layout/Layout'))
const Range = React.lazy(() => import('./global/views/forms/range/Range'))
const Select = React.lazy(() => import('./global/views/forms/select/Select'))
const Validation = React.lazy(() => import('./global/views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./global/views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./global/views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./global/views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./global/views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./global/views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./global/views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./global/views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./global/views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./global/views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: Home },

  { path: '/admin', name: 'Admin', element: Admin },
  { path: '/hospital', name: 'Hospital', element: Hospital },
  { path: '/scanCenter', name: 'ScanCenter', element: ScanCenter },
  { path: '/lab', name: 'Lab', element: Lab },
  { path: '/ambulance', name: 'Ambulance', element: Ambulance },

  { path: '/hospital/dashboard', name: 'Dashboard', element: HospitalDashboard },
  { path: '/scanCenter/dashboard', name: 'Dashboard', element: ScanCenterDashboard },
  { path: '/lab/dashboard', name: 'Dashboard', element: LabDashboard },
  { path: '/ambulance/dashboard', name: 'Dashboard', element: AmbulanceDashboard },

  // { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
