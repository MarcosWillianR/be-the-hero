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

export const IncidentContainer = styled.div`
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

  input, textarea {
    margin-bottom: 20px;
  }

  textarea {
    min-height: 300px;
    border-radius: 5px;
    border: 1px solid #dcdce6;
    line-height: 1.4;

    resize: none;
    padding: 12px;
    @media screen and (max-width: 1300px) {
      min-height: 200px;  
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  a, button {
    margin-top: 0;
  }

  a {
    width: 230px;
    margin-right: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #dcdce6;
    background: transparent;
    color: #41414d;

    transition: border-color 0.2s;
    &:hover {
      border-color: #E02041;
      background: transparent;
    }
  }

  button {
    width: 100%;
  }
`;
