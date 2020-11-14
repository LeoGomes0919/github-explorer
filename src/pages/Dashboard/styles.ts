import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Header = styled.header`
  h1 {
    font-size: 32px;
  }
`;

export const Main = styled.main`
  header {
    margin-top: 80px;
    max-width: 450px;

    h1 {
      font-size: 48px;
      line-height: 58px;
      color: #3a3a3a;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    header {
      h1 {
        font-size: 32px;
        line-height: 42px;
      }
    }
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    min-height: 50px;
    flex: 1;
    border: 0;
    padding: 0 24px;
    border-radius: 4px 0 0 4px;
    transition: all 0.2s;
    color: #3a3a3a;
    border: 1px solid #fff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #ff4040;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    height: 50px;
    width: 210px;
    border: 0;
    background: #04d361;
    border-radius: 0px 4px 4px 0px;
    color: #fff;
    font-weight: bold;
    transition: all 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    input {
      border-radius: 4px;
    }

    button {
      margin-top: 16px;
      border-radius: 4px;
      width: 100%;
    }
  }
`;

export const Error = styled.span`
  display: block;
  margin-top: 8px;
  color: #ff4040;
`;

export const Repositories = styled.div`
  max-width: 700px;
  margin: 80px 0 40px 0;

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

  img {
    width: 52px;
    height: 52px;
    border-radius: 50%;
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
