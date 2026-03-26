import { Link, Outlet } from 'react-router-dom';

export default function Destinations() {
  return (
    <div>
      <p>In Destinations page</p>
      <ul>
        <li><Link to="/destinations/vienna">Vienna, Austria</Link></li>
        <li><Link to="/destinations/sydney">Sydney, Australia</Link></li>
        <li><Link to="/destinations/cape-town">Cape Town, South Africa</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}
