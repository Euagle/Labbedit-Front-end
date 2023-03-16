import styled from "styled-components";

export const StyledEntrar = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    background-color: #ededed;
    width: 100vh;
    height: 50px;
    display: flex;
    position: absolute;
    top: 0;
    align-items: center;
  }
  img {
    width: 28px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  a {
    color: #4088CB;
    font-weight: 500;
  }
`
export const StyledCheckout = styled.header`

// position: absolute;
width: 100vh;

height: 50px;
left: 0px;
top: 44px;

background: #EDEDED;
button{
    font-family: Noto Sans;
font-size: 18px;
font-weight: 600;
line-height: 25px;
letter-spacing: 0em;
text-align: center;
width: 63px;
height: 25px;
margin-left: 296px;
top: 57px;

font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 25px;

text-align: center;

color: #4088CB;

}
`

export const BoxPost = styled.header`

box-sizing: border-box;


display: flex;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;
gap: 18px;

width: 399px;
height: 167px;

background: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 12px;


flex: none;
order: 0;
flex-grow: 0;
margin-bottom: 20px;
p{
    width: 132px;
height: 16px;

font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;

text-align: center;

color: #6F6F6F;



flex: none;
order: 0;
flex-grow: 0;
}
h2{
  width: 182px;
  height: 69px;

font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;

color: #000000;



flex: none;
// order: 1;
flex-grow: 0;
font-family: IBM Plex Sans;
font-size: 18px;
font-weight: 400;
// line-height: 23px;
letter-spacing: 0em;
// text-align: left;

}

span{
    left: 0%;
right: 29.29%;
top: 50%;
bottom: -20.71%;

// background: #6F6F6F;
// transform: rotate(-45deg);
display: flex;

}
h3{
    
    margin-left: 12px;
    margin-right: 12px;

}
h5{
    margin-left: 31px;
    
}

`

export const Comments = styled.div`
margin-left: 129px;
margin-top: -76px;
`
