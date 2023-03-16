import axios from "axios";
import { useContext, useState } from "react";
import { BASE_URL, TOKEN_NAME } from "../constants/url";
import { GlobalContext } from "../contexts/GlobalContext";
import { BoxPost,Comments } from "./styles";
import likes  from "../assets/Vector.png"
import dislike  from "../assets/dislik.png"
import comment  from "../assets/comment.png"
import CommentPage from "../pages/CommentsPage/CommentsPage";
import { goToCreateCommentPage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";




export default function PostCard(props) {
  const { post } = props;
  const navigate =useNavigate()

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

      await axios.put(BASE_URL + `/posts/${post.id}/like`, body, config);

      setIsLoading(false)
      fetchPosts()
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };
  
const comments =()=>{

}
  
  // console.log(post?.comentsPost )
   return (
    <BoxPost>
            <p>enviado por: {post.creator.name}</p>

      <h2>
        {post.content}

<div>

        <span onClick={like} style={{ cursor: "pointer" }}>
          <h4>
        <img src={likes} class="like" width='20px' />
          </h4>  
          <h3>          {" "}{post.likes}
</h3>
          <h4>
        <img src={dislike} class="dislike" width='20px' />
          </h4> 
        

        </span>
        
        
          </div>

        {post.dislike}
      </h2>
    

      <Comments>
          <h5>

          <img onClick={() => goToCreateCommentPage(navigate)} src={comment} class="comment" width='30px' />

{post.comments}</h5>
            </Comments> 
            
        
      <br />
      <br />
      
    </BoxPost>
  );
}
