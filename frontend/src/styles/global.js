import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 400 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #f0f0f5;
  }

  textarea, input, button {
    font: 400 18px 'Roboto', sans-serif;
  }
  
  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  form {
    input {
      height: 60px;
      border-radius: 5px;
      border: 1px solid #dcdce6;

      padding: 12px;
    }
  }

  .button {
      margin-top: 20px;

      height: 60px;
      border-radius: 5px;
      background: #E02041;
      border: 0;

      color: #FFF;
      font-weight: bold;
      font-size: 18px;

      transition: background-color 0.3s;
      &:hover {
        background: ${darken(0.03, '#E02041')}
      }
    }
`;