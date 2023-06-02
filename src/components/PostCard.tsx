import { useEffect, useState } from "react";
import { AuthorType, PostType } from "../common/helpers/types";
import AppService from "../services/AppService";
import { useNavigate } from "react-router-dom";

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
    <article className="postCard" onClick={() => navigate(`/posts/${post.id}`)}>
      <figure>
        <img src={AppService.getImagePlaceholder(post.title)} alt="postImg" />
      </figure>
      <div className="content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        {author && (
          <div className="author">
            <span className="authorIcon">{author.name[0] || "#"}</span>
            <span className="authorName">{author.name}</span>
          </div>
        )}
      </div>
    </article>
  );
}

export default PostCard;
