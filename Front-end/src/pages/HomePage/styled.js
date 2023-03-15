import styled from 'styled-components'

export const Post = styled.section`
Width
364px
Height
131px
Top
126px
Left
30px
Radius
12px
#EDEDED
/* Rectangle 28 */


width: 364px;
height: 131px;
left: 30px;
top: 126px;

background: #EDEDED;
border-radius: 12px;
// button{
//     Width
// 359px
// Height
// Hug (47px)
// Top
// 269px
// Left
// 33px
// Radius
// 12px
// Padding
// 12px, 145px, 12px, 145px
// #4088CB
// Linear Gradient
// #FF6489
// 100%
// #F9B24E
// 100%
// /* Frame 12 */


// /* Auto layout */

// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 12px 145px;

// position: absolute;
// width: 359px;
// height: 47px;
// left: 33px;
// top: 269px;

// background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
// border-radius: 12px;
// }



`
export const PostCardd = styled.section`
display:flex;
flex-direction: column;
gap: 10px;
width: 22.438rem;


`

   






export const PostsStyles = styled.div`
     padding: 11px;
  
  margin-top: 70px;
  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    div {
    //   background-color: #e0e0e0;
    //   min-height: 131px;
    //   width: 22.438rem;
    //   margin: 10px 0;
    //   border-radius: 12px;
    //   border: none;
      input{
        margin: 20px;
        background-color: #e0e0e0;
        border: none;
        font-size: 1.125rem;
      }
    }
    button {
      height: 3.188rem;
      width: 22.438rem;
      border-radius: 12px;
      background: rgb(255, 100, 137);
      background: linear-gradient(
        90deg,
        rgba(255, 100, 137, 1) 0%,
        rgba(249, 178, 78, 1) 100%
      );
      color: #fff;
      border: none;
    }
  }
  hr {
    width: 22.438rem;
    border: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      90deg,
      rgba(255, 100, 137, 1) 0%,
      rgba(249, 178, 78, 1) 100%
    );
    margin: 25px 0;
  }
//   .container-posts {
//     display:flex;
//     flex-direction: column;
//     gap: 10px;
//     width: 22.438rem;
//   }
`;
