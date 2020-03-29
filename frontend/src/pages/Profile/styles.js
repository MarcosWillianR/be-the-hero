import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  header {
    display: flex;
    align-items: center;

    span {
      font-size: 20px;
      margin-left: 24px;
      @media screen and (max-width: 586px) {
        margin: 0px;
        font-size: 18px;
      }
    }

    img {
      height: 64px;
      @media screen and (max-width: 586px) {
        display: none;
      }
    }

    a {
      width: 260px;
      margin-left: auto;
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      @media screen and (max-width: 985px) {
        width: 120px; 
        font-size: 14px;
      }
    }

    button {
      width: 60px;
      height: 60px;
      border-radius: 4px;
      border: 1px solid #dcdce6;
      background: transparent;
      margin-left: 16px;

      transition: border-color 0.2s;
      &:hover {
        border-color: #999;
      }
    }
  }
`;

export const ProfileCases = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;

  @media screen and (max-width: 586px) {
    grid-template-columns: 1fr;
  }
`;

export const ProfileCasesItem = styled.li`
  background: #FFF;
  padding: 24px;
  border-radius: 8px;
  position: relative;

  button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background: transparent;

    &:hover {
      filter: brightness(90%)
    }
  }

  strong {
    display: block;
    margin-bottom: 16px;
    color: #41414d;
  }

  p + strong {
    margin-top: 32px;
  }

  p {
    color: #737380;
    line-height: 21px;
    font-size: 16px;
  }
`;

export const CasesTitle = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;
`;
