import { useEffect, useState } from "react";
import "../styles/home.scss";
import AppService from "../services/AppService";
import { PostType } from "../common/helpers/types";
import PostCard from "../components/PostCard";

function HomePage() {
  const [featured, setFeatured] = useState<PostType[] | []>([]);
  const [posts, setPosts] = useState<PostType[] | []>([]);

  useEffect(() => {
    AppService.getPosts().then((resp) => {
      const _featured = resp.data.splice(0, 4);
      setFeatured(_featured);
      const _otherPosts = resp.data.splice(4);
      setPosts(_otherPosts);
    });
  }, []);

  return (
    <>
      <div className="searchBar">searchBar</div>
      <h2>Featured posts</h2>
      <section className="featuredContainer">
        {featured.map((item: PostType) => (
          <PostCard key={`post_${item.id}`} post={item} />
        ))}
      </section>
      <h2>Older posts</h2>
      <section className="postContainer">
        {posts.map((item: PostType) => (
          <PostCard key={`post_${item.id}`} post={item} />
        ))}
      </section>
    </>
  );
}

export default HomePage;
