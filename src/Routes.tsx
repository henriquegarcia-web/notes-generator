import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { GeneratorScreen } from '@/screens'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* =============================================================== */}

        <Route path="/" element={<Navigate to="/generator" />} />
        <Route path="*" element={<Navigate to="/generator" />} />

        {/* =============================================================== */}

        <Route path="/generator" element={<GeneratorScreen />} />

        {/* =============================================================== */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

// =========================================== ROUTES

// interface RouteProps {
//   isAuthenticated: boolean
//   children: React.ReactNode
// }

// const PrivateRoute = ({ isAuthenticated, children }: RouteProps) => {
//   if (!isAuthenticated) {
//     return <Navigate to="/" replace />
//   }

//   return children
// }

// const PublicRoute = ({ isAuthenticated, children }: RouteProps) => {
//   if (isAuthenticated) {
//     return <Navigate to="/" />
//   }

//   return children
// }
