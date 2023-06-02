import { useNavigate } from "react-router-dom";
import "../../styles/errors.scss";

function Page404() {
  const navigate = useNavigate();

  return (
    <section className="page404Section">
      <img src="/assets/error404.svg" alt="404" />
      <button className="btn btnDefault" onClick={() => navigate("/")}>
        Go back...
      </button>
    </section>
  );
}

export default Page404;
