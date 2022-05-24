import styled from 'styled-components'

export const Container = styled.div`
  header {
    display: flex;
    justify-content: center;
    h1 {
      max-width: 25ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--text-title);
    }
  }

  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    > img {
      border: 1px solid gray;
      width: 40%;
      border-radius: 0.625rem;
    }

    > h3 {
      margin-top: 2rem;
      color: var(--orange);
    }

    > p {
      margin-top: 1rem;
      color: var(--text-title);
    }
  }

  > footer {
    position: absolute;
    bottom: 0.625rem;
    right: 0.625rem;
    > button {
      font-size: 1rem;
      border: 0;
      background-color: white;
      background-color: var(--red);
      color: white;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 2.5rem;
      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`
