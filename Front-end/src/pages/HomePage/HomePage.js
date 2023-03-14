import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import PostCard from "../../components/PlaylistCard";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToLoginPage } from "../../routes/coordinator";

export default function HomePage() {
  const navigate = useNavigate();

  const context = useContext(GlobalContext);
  const { posts, fetchPosts } = context;

  const [isLoading, setIsLoading] = useState(false)
  const [postsName, setPostsName] = useState("")

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_NAME);

    if (!token) {
      goToLoginPage(navigate);
    } else {
      fetchPosts();
    }
  }, []);

  const createPosts = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    try {
      const token = window.localStorage.getItem(TOKEN_NAME);

      const config = {
        headers: {
          Authorization: token
        }
      };

      const body = {
        name: postsName
      }

      await axios.post(BASE_URL + "/posts", body, config);

      setPostsName("");
      setIsLoading(false)
      fetchPosts()
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };

  return (
    <main>
      <Header />
      <section>
        <form onSubmit={createPosts}>
          <h1>Criar post</h1>
          <section>
            <label>Nome</label>
            <input value={postsName} onChange={(e) => setPostsName(e.target.value)} />
          </section>
          <button disabled={isLoading}>Criar</button>
        </form>
      </section>

      <hr />
      <h1>Posts</h1>

      <section>
        { posts.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </section>
    </main>
  );

  
}



