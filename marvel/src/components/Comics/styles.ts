import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.div`
  margin-top: 3rem;
  height: 25rem;
  width: 20rem;
  /*   border: 1px solid #f2ebdd; */
  /*  border: 1px solid #5caab4; */
  border-radius: 0.625rem;
`
interface ComicProps {
  isSelected: boolean
  activeColor: 'green'
}

const colors = {
  green: '#33CC95',
  
}

export const Button = styled.button<ComicProps>`
  margin-top: 0.5rem;
  border-top: 1px solid black;
  padding: 1rem;
  font-size: 1rem;
  border: 0;
  background-color: white;
  border: 1px solid var(--green);
  background: ${props =>
    props.isSelected
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'};
  color: var(--green);
  padding: 0 1rem;
  border-radius: 0.25rem;
  height: 2rem;
  transition: filter 0.3s;

`

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  .image {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    > p {
      position: absolute;
      top: 10px;
      left: 50px;
      visibility: hidden;
    }

    > img {
      border: 1px solid gray;
      width: 75%;

      border-radius: 0.625rem;

      overflow: hidden;

      &:hover {
        opacity: 0.4;
        cursor: pointer;
      }
    }
  }
  .button {
    display: flex;
    justify-content: center;
    width: 100%;
    > button {
      margin-top: 0.5rem;
      border-top: 1px solid black;
      padding: 1rem;
      font-size: 1rem;
      border: 0;
      background-color: white;
      border: 1px solid var(--green);
      color: var(--green);
      padding: 0 1rem;
      border-radius: 0.25rem;
      height: 2rem;
      transition: filter 0.3s;

      &:hover {
      }
    }
  }
`
