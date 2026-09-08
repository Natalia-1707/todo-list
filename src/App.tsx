/* import styles from './App.module.css'*/
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthorizationPage from './components/authorization-page/AuthorizationPage';
import AppPage from './components/app-page/AppPage';
import NotFoundPage from './components/not-found-page/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/authorize" replace />} />
      <Route path="/authorize" element={<AuthorizationPage />} />;
      <Route path="/todo" element={<AppPage />} />;
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
