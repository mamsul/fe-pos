import { Route, Routes } from 'react-router';
import NotFoundPage from './components/NotFoundPage';
import ProtectedLayout from './components/layouts/ProtectedLayout';
import PublicLayout from './components/layouts/PublicLayout';
import { AuthProvider } from './hooks/useAuth';
import { protectedRoute, publicRoute } from './routes';

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
