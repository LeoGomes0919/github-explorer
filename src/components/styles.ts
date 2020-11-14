import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin-top: 80px;
`;

export const Profile = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    height: 64px;
    border-radius: 4px;
    animation: pulse 1.5s infinite ease-in-out;

    @keyframes pulse {
      0% {
        background-color: rgba(165, 165, 165, 0.2);
      }
      50% {
        background-color: rgba(165, 165, 165, 0.35);
      }
      100% {
        background-color: rgba(165, 165, 165, 0.2);
      }
    }
  }

  .avatar {
    min-width: 64px;
    border-radius: 50%;
  }

  section {
    flex-basis: calc(700px - 80px);
    margin: 8px 0px 0px 16px;
    .full-name {
      max-width: 300px;
      height: 20px;
    }

    .description {
      max-width: 700px;
      height: 20px;
      margin-top: 8px;
    }
  }

  .details-repo {
    flex-basis: 100%;
    margin-top: 24px;
    display: flex;

    div {
      flex-basis: 120px;
      height: 52px;

      + div {
        margin-left: 40px;
      }
    }
  }

  .issues {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 40px;

    div {
      width: 100%;
      height: 70px;

      + div {
        margin-top: 16px;
      }
    }
  }
`;
