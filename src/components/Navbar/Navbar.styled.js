import styled from "styled-components";

export const StyledNavbar = styled.nav`
ul{
    display:flex;
    flex-direction:column;
    margin-top:35%;
}
ul li{
    list-style:none;
    text-decoration:none;
    color:white;
    padding:7px;
    opacity:0.6;
    font-size:20px;
}
.vl{
    background-color:white;
    height:94px;
    width:2px;
    margin-left:15px;
    opacity:0.6;
}
@media only screen and (max-width: 1000px) {
    
}
@media only screen and (max-width: 1000px) {
    display:none;
}
`;