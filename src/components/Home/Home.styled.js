// @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
import styled from "styled-components";

export const StyledHome = styled.nav`
  * {
    margin: 0;
    padding: 0;
    // height:100vh;
  }
  p {
    margin-top: 13%;
    margin-left: 7%;
    // color: #F4AD2F;
    color:#66fcf1;
    font-family: source;
    font-size:20px;
  }
  h1 {
    color:#CCD6F6;
    // opacity: 0.8;
    margin-top: 0.5%;
    margin-left: 7%;
    font-weight: 600;
    font-size: 80px;
    letter-spacing: 2px;
    font-family:calibre;
  }
  h2 {
    color: #8892B0;
    margin-top: 0.5%;
    // opacity: 0.6;
    margin-left: 7%;
    // margin-right: 1%;
    font-weight: 600;
    font-family:calibre;
    font-size: 4rem;
    letter-spacing: 2px;
  }
  h3 {
    margin-left: 7%;
    margin-top: 5%;
    color: #8892B0;
    // opacity: 0.6;
    margin-right: 50%;
    font-size:1.2rem;
    font-family:calibre;
    font-weight:10;
  }
  .home{
    margin-left:7%;
  }
  a{
    text-decoration:none;
    color:#66fcf1;
  }
  @media only screen and (max-width: 1024px){
    p{
      margin-top:10%;
      margin-left:10%;
    }
    h1{
      font-size:4rem;
      margin-left:10%;
    }
    h2{
      font-size:3rem;
      margin-left:10%;
    }
    h3{
      margin-top:8%;
      margin-right:50%;
      margin-left:10%;
    }
    }
  @media only screen and (max-width: 768px) {
    p{
      margin-top:20%;
      margin-left:15%;
    }
    h1{
      font-size:3rem;
      margin-left:15%;
    }
    h2{
      font-size:2rem;
      margin-left:15%;
    }
    h3{
      margin-top:8%;
      margin-right:10%;
      margin-left:15%;
    }
  }
      @media only screen and (max-width: 600px)  {
    p{
      margin-top:20%;
      margin-left:25%;
    }
    h1{
      font-size:2rem;
      margin-left:25%;
    }
    h2{
      font-size:1.5rem;
      margin-left:25%;
    }
    h3{
      margin-top:8%;
      margin-right:10%;
      margin-left:25%;
    }
}

}
@media only screen and (max-width: 500px){
      p{
      margin-top:30%;
      margin-left:15%;
    }
    h1{
      font-size:2rem;
      margin-left:15%;
    }
    h2{
      font-size:1.5rem;
      margin-left:15%;
    }
    h3{
      margin-top:8%;
      margin-right:10%;
      margin-left:15%;
    }
}
@media only screen and (max-width: 320px){
  p{
    margin-top:40%;
  }
}
.container{
  display: flex;
  padding:0;
}
.social{
  background-color: #0a192f ;
  // background-color:#1C212A;
  height: 100vh;
  margin-top: 27%;
  margin-left:-70px ;
}
@media only screen and (max-width: 1100px) {
  .social{
    margin-left: -40px;
    margin-top:32.5%;
  }
}
`;
