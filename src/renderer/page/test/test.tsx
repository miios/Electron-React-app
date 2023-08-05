import { useNavigate } from "react-router-dom";

export const Test = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/')
  }

  return (
    <div>
      Test Page
      <button onClick={() => handleRedirect()}>redirect click</button>
    </div>
  );
}
