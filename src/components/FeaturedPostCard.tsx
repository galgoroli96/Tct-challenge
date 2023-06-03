import { PostType } from "../common/helpers/types";
import AppService from "../services/AppService";
import { useNavigate } from "react-router-dom";
import "../styles/post.scss";

interface IPostProps {
  post: PostType;
}
function FeaturedPostCard({ post }: IPostProps) {
  const navigate = useNavigate();

  return (
    <div
      className="featuredPostCard"
      onClick={() => navigate(`/posts/${post.id}`)}
    >
      <img src={AppService.getImagePlaceholder(post.title)} alt="postImg" />
      <div className="cardContent">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default FeaturedPostCard;
