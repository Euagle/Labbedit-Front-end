import styled from 'styled-components'

export const LoginContainer = styled.div`

    display:grid;
    justify-content: center; 
    grid-template-rows: 42% 58%;
    grid-template-columns: 100%;
    height: 100vh;
    width: 100vw;
`

export const LogoContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const MainContainer = styled.div`
    display:flex;
    align-items: start;
    justify-content: center;
    width: 100%;
    @media screen and (min-device-width : 800px) and (max-device-width : 1024px) {
        width: 70%;
        margin:auto
    }
    @media screen and (min-device-width : 1025px){
        width: 50%;
        margin:auto
    }
`

export const Logo = styled.div`
    display: grid;
    grid-template-columns: repeat(2,auto);
    grid-template-rows: auto;
`

export const Orange = styled.div`
    background-color: #FE7E02;
    border-radius: 100% 0 0 0;
    height: 42px;
    width: 42px;
`

export const Gray = styled.div`
    background-color: #45525B;
    border-radius: 100% 0 0 0;
    height: 42px;
    width: 42px;
`

export const LightOrange = styled.div`
    background-color: #F9B24E;
    border-radius: 0 0 100% 0;
    height: 42px;
    width: 42px;
`

export const LightGray = styled.div`
    background-color: #A8BBC6;
    border-radius: 0 0 100% 0;
    height: 42px;
    width: 42px;
`

export const Title = styled.h3`
    color: #373737;
    font-size: 36px;
    font-weight: 700;
    line-height: 46.8px;
    margin-top: 11px;
`

export const SubTitle = styled.p`
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
`

export const Hr = styled.div`
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
height: 1px;
`

export const LoaderContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 92vh;
`

export const Arti = styled.article`
input{
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    height: 60px;
    width: 363px;
    padding-left: 4vw;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Noto Sans';
    color: #323941;
    margin-bottom: 10px;
    margin-top: 10px;


}
input:focus{
    outline: none;
}
.button{
    width: 418px;
    height: 51px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 27px;
    border: none;
    font-weight: 700;
    font-size: 18px;
    font-family: 'Noto Sans';
    color: #FFFFFF;  
}
.button-color{
    width: 418px;
    height: 51px;
    background: white;
    border-radius: 27px;
    border: none;
    border: solid  orange;

    font-weight: 700;
    font-size: 18px;
    font-family: 'Noto Sans';
    color: orange;}
button:hover{
    cursor:pointer;
    opacity: 0.8;
}
`
