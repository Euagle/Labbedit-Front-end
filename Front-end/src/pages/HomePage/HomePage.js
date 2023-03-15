import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import PostCard from "../../components/PostsCard";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToLoginPage } from "../../routes/coordinator";
import {   Post, PostCardd , PostsStyles} from './styled'

export default function HomePage() {
  const navigate = useNavigate();

  const context = useContext(GlobalContext);
  const { posts, fetchPosts } = context;

  const [isLoading, setIsLoading] = useState(false)
  const [content, setContent] = useState("")

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
         content
      }

      await axios.post(BASE_URL + "/posts", body, config);

      setContent("");
      setIsLoading(false)
      fetchPosts()
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };

  console.log(posts)
  return (
    <main>
      <Header/>
          <PostsStyles>
        <section >
          <div >
            <input
              type="text"
              placeholder="Escreva seu post..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button type="submit" onClick={createPosts}>
            Postar
          </button>
        </section>
        <hr />
        <section className="container-posts">
          {posts.Post?.map((post) => {
              return <PostCard  key={post.id} post={post} />;
            })
            .reverse()}
        </section>
      </PostsStyles>
    


    </main>
  );

  
}