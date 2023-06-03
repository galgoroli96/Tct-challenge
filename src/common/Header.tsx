import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="logoContainer" onClick={() => navigate("/")}>
        <img src="/favicon.ico" alt="blogImg" />
        <h1>TcT Blog</h1>
      </div>

      <SearchBar />
    </header>
  );
}

export default Header;
