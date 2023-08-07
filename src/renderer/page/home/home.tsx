import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/clicker')
  }

  return (
    <div>
      Home Page
      <button onClick={() => handleRedirect()}>redirect click</button>
    </div>
  );
}
