import { useNavigate } from 'react-router-dom';

import { ROUTE } from '../../../utils/route';

export const Settings = () => {
  const navigate = useNavigate();

  const handleRedirect = (route) => {
    navigate(route)
  }

  return (
    <div>
      <span>Settings</span>
      <button onClick={() => handleRedirect(ROUTE.HOME)}>back</button>
    </div>
  );
}
