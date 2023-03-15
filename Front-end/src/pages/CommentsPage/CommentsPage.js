import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { BoxPost } from "./styles";
import likes  from "../../assets/Vector.png"
import dislike  from "../../assets/dislik.png"
import comment  from "../../assets/comment.png"
import { goToHomePage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export default function CommentPage() {

    const navigate = useNavigate()
    const context = useContext(GlobalContext);
    const { posts, fetchPosts } = context;
  
    const [isLoading, setIsLoading] = useState(false)
    const [comment, setComment] = useState("")
    
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
  
  
  
    useEffect(() => {
      const token = window.localStorage.getItem(TOKEN_NAME);
  
      if (!token) {
        goToHomePage(navigate);
      } else {
        fetchPosts();
      }
    }, []);
  
    const createComment = async (e) => {
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
           comment
        }
  
        await axios.post(BASE_URL + "/comments/:id", body, config);
  
        setComment("");
        setIsLoading(false)
        fetchPosts()
      } catch (error) {
        console.error(error?.response?.data);
        window.alert(error?.response?.data)
      }
    };
  
console.log("imprimir",posts)
    return(
        <>
      <BoxPost>
            <p>enviado por: {posts?.creator?.name}</p>

      <h2>
        {posts.Post?.content}
<div>

        <span >
          <h4>
        <img src={likes} class="like" width='20px' />
          </h4>  
          <h3>          {" "}{posts?.likes}
</h3>
          <h4>
        <img src={dislike} class="dislike" width='20px' />
          </h4> 
        

        </span>
        
        
          </div>

        {posts?.dislike}
      </h2>
    

      <div>
          <h5>

          <img src={comment} class="comment" width='30px' />

{posts?.comments}</h5>
            </div> 
        
      <br />
      <br />
      
    </BoxPost>
  
        </>
    )
}