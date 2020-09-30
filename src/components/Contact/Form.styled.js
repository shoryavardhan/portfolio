import styled from "styled-components";

export const StyledForm = styled.form`
  .container {
    background: #0a192f;
    width: 700px;
    margin-top: -50px;
    margin-left: 150px;
  }
  .ele {
    border: 1px solid #1c283d;
    font-family: Lato;
    height: 55px;
    margin: 15px;
  }
  .eleS {
    background-color: #0a192f !important;
    border: none;
    padding: 9px;
    color: #5b7276;
    width: 600px;
    height: 50px;
  }
  .eleS:focus {
    outline: none;
  }
  .eleText {
    height: 185px;
  }
  .text {
    height: 190px;
  }
  .button {
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    color: #66fcf1;
    font-family: Lato;
    font-size: 15px;
  }
  .contact {
    padding: 5px;
  }
  .thankyou {
    color: white !important;
    opacity:0.6;
    margin-left:150px;
    font-family:lato;
    margin-top: 50px;
    font-size:30px;
  }
  .quotes{
      font-size:50px;
  }
`;
