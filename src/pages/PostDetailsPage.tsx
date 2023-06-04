import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppService from "../services/AppService";
import { AuthorType, CommentsType, PostType } from "../common/helpers/types";
import "../styles/post.scss";
import CommentsList from "../components/CommentsList";
import GoBackBtn from "../common/partials/GoBackBtn";
import FeaturedPostCard from "../components/FeaturedPostCard";

function PostDetailsPage() {
  const params = useParams();
  const [details, setDetails] = useState<PostType | null>();
  const [comments, setComments] = useState<CommentsType[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<PostType[] | []>([]);
  const [author, setAuthor] = useState<AuthorType | null>();

  useEffect(() => {
    if (params.id) {
      AppService.getPostsById(params.id).then((resp) => {
        setDetails(resp.data);
        AppService.getAuthor(resp.data.userId).then((auth) =>
          setAuthor(auth.data)
        );
      });
      AppService.getComments(params.id).then((comm) => setComments(comm.data));
      AppService.getPosts().then((resp) => {
        const filtered = resp.data.filter(
          (post: PostType) => post.id.toString() !== params.id
        );
        setFeaturedPosts(filtered.splice(0, 4));
      });
    }
  }, [params.id]);

  return (
    <div className="container">
      <GoBackBtn />
      <section className="detailsSection">
        <h1>{details?.title}</h1>
        <div className="authorContainer">
          {author && (
            <>
              <span className="authorIcon">{author.name[0] || "#"}</span>
              <span className="authorName">by {author.name}</span>
            </>
          )}
        </div>
        <img
          src={details?.title && AppService.getImagePlaceholder(details.title)}
          alt="postImg"
        />
      </section>
      <div className="postDetailsContainer">
        <section className="commentsAndDescSection">
          <p className="description">{details?.body}</p>
          <h2>Comments</h2>
          <CommentsList items={comments} />
        </section>
        <div className="featuredPosts">
          <h2 className="title">Featured posts</h2>
          <div className="postContainer">
            {featuredPosts.map((item: PostType) => (
              <FeaturedPostCard key={`post_${item.id}`} post={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetailsPage;
