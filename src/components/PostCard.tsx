import { useEffect, useState } from "react";
import { AuthorType, PostType } from "../common/helpers/types";
import AppService from "../services/AppService";
import { useNavigate } from "react-router-dom";
import "../styles/postCard.scss";

interface IPostProps {
  post: PostType;
}
function PostCard({ post }: IPostProps) {
  const [author, setAuthor] = useState<AuthorType | null>();
  const navigate = useNavigate();

  useEffect(() => {
    AppService.getAuthor(post.userId).then((auth) => setAuthor(auth.data));
  }, [post]);

  return (
    <div className="postCard" onClick={() => navigate(`/posts/${post.id}`)}>
      <div className="cardHeader">
        <img src={AppService.getImagePlaceholder(post.title)} alt="postImg" />
      </div>
      <div className="cardBody">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div className="cardFooter">
        {author && (
          <>
            <span className="authorIcon">{author.name[0] || "#"}</span>
            <span className="authorName">{author.name}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default PostCard;
