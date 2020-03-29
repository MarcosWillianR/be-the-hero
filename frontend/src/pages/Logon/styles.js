import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  & > img {
    @media screen and (max-width: 968px) {
      display: none;
    }
  }
`;

export const FormContainer = styled.section`
  width: 100%;
  max-width: 350px;
  align-self: center;
  margin: 0 auto;

  img {
    margin: 0 auto;
  }
  
  form {
    display: flex;
    flex-direction: column;
    
    margin-top: 100px;

    h1 {
      margin-bottom: 20px;
      font-size: 2rem;
    }

    a {
      margin-top: 20px;
      
      display: flex;
      align-items: center;
      
      color: #41414d;
      font-weight: 500;
      font-size: 18px;
      svg {
        margin-right: 10px;
      }
    }
  }
`;