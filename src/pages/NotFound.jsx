import { useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The route "{location.pathname}" does not exist.</p>
    </div>
  );
}
