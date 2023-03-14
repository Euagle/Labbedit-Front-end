import axios from "axios";
import { useContext, useState } from "react";
import { BASE_URL, TOKEN_NAME } from "../constants/url";
import { GlobalContext } from "../contexts/GlobalContext";

export default function PostCard(props) {
  const { posts } = props;

  const context = useContext(GlobalContext);
  const { fetchPosts } = context;

  const [isLoading, setIsLoading] = useState(false)

  const like = async () => {
    setIsLoading(true)

    try {
      const token = window.localStorage.getItem(TOKEN_NAME);

      const config = {
        headers: {
          Authorization: token
        }
      };

      const body = {
        like: true
      }

      await axios.put(BASE_URL + `/posts/${posts.id}/like`, body, config);

      setIsLoading(false)
      fetchPosts()
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };

  return (
    <article>
      <h2>
        {posts.name}

        <span onClick={like} style={{ cursor: "pointer" }}>
          {" "}👍 {posts.likes}
        </span>
      </h2>

      <p>criada por {posts.creator.name}</p>
      <div>
      <p>{posts.posts}</p>

      </div>


      <br />
      <br />
    </article>
  );
}


