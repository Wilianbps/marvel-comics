import Modal from 'react-modal'

import { Container, ContainerCard } from './styles'

Modal.setAppElement('#root')

interface ModalComicsProps {
  getComics: {
    title: string
    image: string
    description: string
  }[]
  onModalComicsSelectedsOpen: boolean
  onRequestClose: () => void
  children?: React.ReactNode
}

export function ModalComicsSelecteds({
  getComics,
  onModalComicsSelectedsOpen,
  onRequestClose,
  children
}: ModalComicsProps) {
  return (
    <Modal
      isOpen={onModalComicsSelectedsOpen}
      onRequestClose={onRequestClose}
      className="react-modal-comics-selecteds"
    >
      <Container>
        <header>
          <h1>Quadrinhos Selecionados</h1>
        </header>
        <ContainerCard>
          {getComics.map(comic => (
            <div className="cards-comics">
              <header>
                <h4>{comic.title}</h4>
              </header>

              <main>
                <img src={comic?.image} alt="" />

                <h3>Descrição</h3>

                <p>
                  {comic.description === '' ? comic.title : comic.description}
                </p>
              </main>
            </div>
          ))}
        </ContainerCard>
        <footer>
          <button onClick={onRequestClose}>Fechar</button>
        </footer>
      </Container>
    </Modal>
  )
}
