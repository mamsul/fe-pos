import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes } from 'react-router';
import NotFoundPage from './components/NotFoundPage';
import OfflineAlert from './components/OfflineAlert';
import ProtectedLayout from './components/layouts/ProtectedLayout';
import PublicLayout from './components/layouts/PublicLayout';
import { AuthProvider } from './hooks/useAuth';
import { useOfflineStatus } from './hooks/useOfflineStatus';
import { protectedRoute, publicRoute } from './routes';

function App() {
  const { offlineStatus } = useOfflineStatus();

  return (
    <React.Fragment>
      {offlineStatus && <OfflineAlert />}

      <AuthProvider>
        <AnimatePresence mode="wait">
          <Routes>
            <Route element={<PublicLayout />}>
              {publicRoute.map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={<item.element />}
                />
              ))}
            </Route>
            <Route path="/dashboard" element={<ProtectedLayout />}>
              {protectedRoute.map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={<item.element />}
                />
              ))}
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
