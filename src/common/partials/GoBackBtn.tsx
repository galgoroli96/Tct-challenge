import { useNavigate } from "react-router-dom";

function GoBackBtn() {
  const navigate = useNavigate();

  return (
    <button className="btn btnIcon" onClick={() => navigate("/")}>
      <img src="/assets/icons/arrowBack.svg" alt="arrowBack" />
      Go back...
    </button>
  );
}

export default GoBackBtn;
