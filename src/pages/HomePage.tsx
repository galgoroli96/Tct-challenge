import { useEffect, useState } from "react";
import "../styles/home.scss";
import AppService from "../services/AppService";
import { PostType } from "../common/helpers/types";
import PostCard from "../components/PostCard";
import { useFilter } from "../context/FilterContext";

function HomePage() {
  const [filteredPosts, setFilteredPosts] = useState<PostType[] | []>([]);
  const [posts, setPosts] = useState<PostType[] | []>([]);
  const { filter } = useFilter();

  useEffect(() => {
    AppService.getPosts().then((resp) => {
      setPosts(resp.data);
    });
  }, []);

  useEffect(() => {
    if (filter !== "") {
      const _filtered = posts.filter((item) =>
        item.title.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredPosts(_filtered);
    }
    // eslint-disable-next-line
  }, [filter]);

  return (
    <div className="container">
      {filter && (
        <>
          <h2>Search results:</h2>
          {filteredPosts.length > 0 ? (
            <>
              <section className="postContainer">
                {filteredPosts.map((item: PostType) => (
                  <PostCard key={`post_${item.id}`} post={item} />
                ))}
              </section>
            </>
          ) : (
            <>
              <p className="noResult">
                Ooops! No results found for your search: <span>{filter}</span>.
                Please try to search for a different one.
              </p>
            </>
          )}
          <h2>Older posts</h2>
        </>
      )}
      <section className="postContainer">
        {posts.map((item: PostType) => (
          <PostCard key={`post_${item.id}`} post={item} />
        ))}
      </section>
    </div>
  );
}

export default HomePage;
