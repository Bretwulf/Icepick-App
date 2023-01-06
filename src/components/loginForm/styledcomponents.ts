import styled from "styled-components";

export const LoginFormComp = styled.form`
  width: 100%;
  background-color: var(--Color-primary);
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  font-family: "Inter", sans-serif;

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 33px;
    color: #fdf7f7;
  }

  .passwordWrapper{
    width:100%;
    height:max-content;
    position:relative;
    top:0;
    display: flex;
    gap: 32px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .errorMessage{
    color: white;
    
  }

  .passToggle{
    background: none;
    width: max-content;
    height:max-content;
    position:absolute;
    right: 10px;
    top:0px;
  }

  input {
    width: 100%;
    background: #fdfcfc;
    border-radius: 25px;
    padding: 12px 12px;
    height: 50px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
  input:focus {
    outline:  var(--Color-primary-2) 1px solid;
  }

  button {
    width: 100%;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    background: #56eaf6;
    border-radius: 125px;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    color: #1e3c58;
    font-family: "Inter", sans-serif;
  }
  button:disabled{
    opacity:50%;
  }
`;
