import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom'
import './global/scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./global/layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./global/views/pages/login/Login'))
const Register = React.lazy(() => import('./global/views/pages/register/Register'))
const Page404 = React.lazy(() => import('./global/views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./global/views/pages/page500/Page500'))

const Admin = React.lazy(() => import('./admin'))
const Patient = React.lazy(() => import('./patient'))
const Hospital = React.lazy(() => import('./hospital'))
const Doctor = React.lazy(() => import('./doctor'))
const Lab = React.lazy(() => import('./lab'))
const ScanCenter = React.lazy(() => import('./scanCenter'))
const Ambulance = React.lazy(() => import('./ambulance'))
const Home = React.lazy(() => import('./home'))

const MainLayout = () => {
  let route = window.location.pathname.split('/')[1]
  switch (route) {
    case 'admin': {
      return <Admin />
    }
    case 'hospital': {
      return <Hospital />
    }
    case 'scanCenter': {
      return <ScanCenter />
    }
    case 'lab': {
      return <Lab />
    }
    case 'ambulance': {
      return <Ambulance />
    }
    default: {
      return null
    }
  }
}

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />

          {/* <Route exact path="/doctor" name="Doctor" element={<Doctor />} />
          <Route exact path="/patient" name="Patient" element={<Patient />} />
          <Route exact path="/hospital" name="Hospital" element={<Hospital />} />
          <Route exact path="/scanCenter" name="ScanCenter" element={<ScanCenter />} />
          <Route exact path="/lab" name="Lab" element={<Lab />} />
          <Route exact path="/ambulance" name="Ambulance" element={<Ambulance />} /> */}

          <Route exact path="/" name="Home" element={<Home />} />
          {/* <Route exact path="/admin" name="Admin" element={<Admin />} /> */}
          <Route path="*" name="Home" element={<MainLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
