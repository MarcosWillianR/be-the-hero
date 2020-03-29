import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 1920px;
  height: 100vh;
  padding: 90px 180px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 90px 0;
  }
`;

export const RegisterContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px;

  box-shadow: 16px 16px 44px rgba(0,0,0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1300px) {
    padding: 40px;
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
    box-shadow: none;
  }
`;

export const Information = styled.section`
  margin-right: 30px;
  img {
    margin-bottom: 60px;
  }

  h1, p { 
    margin: 30px 0
  }

  h1 { 
    font-size: 2.25rem 
  }

  p {
    max-width: 400px;
    font-size: 1.125rem;
    line-height: 1.4;
    font-weight: 500;
    color: #41414d;
  }

  a {
    margin-top: 120px;

    display: flex;
    align-items: center;

    font-size: 1rem;
    font-weight: bold;
    color: #000;

    svg {
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 1300px) {
    margin: 0;

    img, h1, p, a {
      margin: 0 auto 10px auto;
      text-align: center;
    }

    h1 {
      font-size: 1.5rem
    }

    p, a {
      font-size: 0.875rem;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 20px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;

  input {
    margin-bottom: 0;
    
    &:first-of-type {
      width: 100%;
      margin-right: 10px;
    }

    &:last-of-type {
      max-width: 88px;
      text-align: center;
    }
  }
`;
