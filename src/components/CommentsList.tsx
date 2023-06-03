import { CommentsType } from "../common/helpers/types";
import AppService from "../services/AppService";
import "../styles/comment.scss";

interface ICommentsProps {
  items: CommentsType[];
}

function CommentsList({ items }: ICommentsProps) {
  if (items.length === 0) {
    return <span>No comments</span>;
  }
  return (
    <div className="commentsList">
      {items.map((comment) => (
        <div className="comment" key={`comment_${comment.id}`}>
          <img
            src={AppService.getImagePlaceholder(
              comment.name[0].toUpperCase(),
              "40x40",
              "01449b"
            )}
            alt="postImg"
            className="commentImage"
          />
          <div className="commentContent">
            <div className="commentHeader">
              <span className="name">{comment.name}</span>
              <span>{comment.email}</span>
            </div>
            <p className="commentBody">{comment.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentsList;
