import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 80%;
`

export const ContainerHeader = styled.div`
  .background-color-header {
    background-color: white;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    padding: 1rem;

    > img {
      width: 120px;
      height: 50px;
    }

    .links {
      display: flex;

      > span {
        color: black;
        margin: 0 1rem 0 1rem;
        font-size: 18px;
      }
      > a {
        color: var(--text-title);
        text-decoration: none;
        font-size: 18px;
        transition: color 0.3s;

        &:hover {
          color: var(--red);
        }
      }
    }
  }

  > img {
    width: 100%;
    display: block;
    margin: 0 auto;
    border-radius: 10px;
  }
`

export const Content = styled.main`
  margin-top: 2rem;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: var(--text-title);
      font-size: 4rem;
      &::after {
        content: '';
        display: block;
        width: 16rem;
        border-bottom: 5px solid var(--red);
      }
    }

    .search_comic {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      > input {
        height: 2.5rem;
        width: 25rem;
        outline-color: var(--orange);
        border-radius: 0.25rem;
        border: 1px solid var(--text-title);
        font-weight: 400;
        font-size: 1rem;
        color: var(--text-title);
      }
    }
  }
  main {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .button {
    display: flex;
    justify-content: center;

    > button {
      margin: 3rem;
      font-size: 1rem;
      margin-left: 1rem;
      color: #fff;
      background: var(--orange);
      border: 0;
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
export const ContainerForm = styled.div``
