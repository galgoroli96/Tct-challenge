import { useEffect, useState } from "react";
import "../styles/home.scss";
import AppService from "../services/AppService";
import { PostType } from "../common/helpers/types";
import PostCard from "../components/PostCard";

function HomePage() {
  // const [featured, setFeatured] = useState<PostType[] | []>([]);
  const [posts, setPosts] = useState<PostType[] | []>([]);

  useEffect(() => {
    AppService.getPosts().then((resp) => {
      setPosts(resp.data);
    });
  }, []);

  return (
    <div className="container">
      <section className="postContainer">
        {posts.map((item: PostType) => (
          <PostCard key={`post_${item.id}`} post={item} />
        ))}
      </section>
    </div>
  );
}

export default HomePage;
