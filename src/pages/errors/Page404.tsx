import GoBackBtn from "../../common/partials/GoBackBtn";
import "../../styles/errors.scss";

function Page404() {
  return (
    <section className="page404Section">
      <img src="/assets/error404.svg" alt="404" className="errorImg" />
      <GoBackBtn />
    </section>
  );
}

export default Page404;
