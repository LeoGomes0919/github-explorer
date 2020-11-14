import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: 0.2s;

    &:hover {
      color: ${shade(0.2, '#a8a8b3')};
    }
  }
`;

export const Container = styled.main`
  margin-top: 80px;
  max-width: 700px;
  header {
    display: flex;
    img {
      max-width: 64px;
      max-height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      h1 {
        color: #3a3a3a;
        font-size: 24px;
        line-height: 34px;
      }

      span {
        color: #a8a8b3;
        font-size: 14px;
        line-height: 24px;
      }
    }
  }

  aside {
    display: flex;
    margin-top: 24px;

    div {
      display: flex;
      flex-direction: column;

      + div {
        margin-left: 40px;
      }

      strong {
        font-size: 22px;
        color: #3a3a3a;
        line-height: 32px;
      }

      span {
        color: #a8a8b3;
        font-size: 14px;
      }
    }
  }
`;

export const Issues = styled.article`
  margin-top: 48px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    background: #fff;
    border-radius: 4px;
    padding: 8px 16px;
    transition: 0.2s;
    box-shadow: 2px 4px 8px -2px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: translateX(8px);
      border: 1px solid #04d361;

      svg {
        color: #04d361;
      }
    }

    + a {
      margin-top: 16px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;

    strong {
      font-size: 16px;
      color: #3d3d3d;
      line-height: 26px;
    }

    span {
      font-size: 14px;
      color: #a8a8b3;
      line-height: 24px;
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;
