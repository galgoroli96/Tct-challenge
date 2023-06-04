import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="logoContainer" onClick={() => navigate("/")}>
        <img src="/favicon.ico" alt="blogImg" />
        <h1>TcT Blog</h1>
      </div>
    </header>
  );
}

export default Header;
