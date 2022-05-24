import { useEffect, useState } from 'react'
import Modal from 'react-modal'

import { Container } from './styles'

Modal.setAppElement('#root')
interface ModalComicsProps {
  getComic: {
    id: number
    title: string
    variantDescription: string
    thumbnail: {
      path: string
      extension: string
    }
  }
  onModalComicOpen: boolean
  onRequestClose: () => void
}

export function ModalComics({
  getComic,
  onModalComicOpen,
  onRequestClose
}: ModalComicsProps) {
  return (
    <Modal
      isOpen={onModalComicOpen}
      onRequestClose={onRequestClose}
      className="react-modal-comics"
    >
     
        <Container>
          <header>
            <h1>{getComic.title}</h1>
          </header>

          <main>
            <img
              src={`${getComic?.thumbnail?.path}.${getComic?.thumbnail?.extension}`}
              alt=""
            />

            <h3>Descrição</h3>

            <p>
              {getComic.variantDescription === ''
                ? getComic.title
                : getComic.variantDescription}
            </p>
          </main>

          <footer>
            <button onClick={onRequestClose}>Fechar</button>
          </footer>
        </Container>

    </Modal>
  )
}
