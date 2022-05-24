import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    margin-bottom: 4rem;
    h1 {
      text-align: center;
      color: var(--orange);
    }
  }
  > footer {
   align-self:flex-end ;
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
export const ContainerCard = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;

  .cards-comics {
    border: 1px solid gray;
    padding: 1rem;
    border-radius: 0.625rem;
    max-width: 16rem;

    header {
      display: flex;
      justify-content: center;
      h4 {
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

      > img {
        border: 1px solid gray;
        width: 200px;
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
  }
`
