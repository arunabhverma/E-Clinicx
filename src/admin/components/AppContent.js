import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CContainer } from '@coreui/react'

// routes config
import routes from '../routes'
import Loading from 'src/global/components/loading'

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<Loading />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
