//REACT
import { useEffect, useMemo, useState } from 'react'

//API
import api from '../../services/api'

//Icons
import { BsSearch } from 'react-icons/bs'

//Componentes
import { Comics } from '../../components/Comics'
import { ModalComics } from '../../components/ModalComics'
import { ModalComicsSelecteds } from '../../components/ModalComicsSelecteds'

//Imagens
import imageHome from '../../imgs/personagens_marvel2.png'
import logoMarvel from '../../imgs/Marvel_Logo.svg'

import { Container, ContainerHeader, Content } from './styles'

interface HomeProps {
  thumbnail: {
    path: string
    extension: string
  }
  id: number
  title: string
  variantDescription: string
}

interface DataComicProps {
  id: number
  title: string
  variantDescription: string
  thumbnail: {
    path: string
    extension: string
  }
}

interface NewComicProps {
  id: number
  title: string
  image: string
  description: string
}

export function Home() {
  const [comics, setComics] = useState<HomeProps[]>([])

  const [search, setSearch] = useState('')

  const [dataComic, setDataComic] = useState<DataComicProps>(
    {} as DataComicProps
  )

  const [comicModalOpen, setComicModalOpen] = useState(false)

  const [comicsSelectedsModalOpen, setComicsSelectedsModalOpen] =
    useState(false)

  const [arrayComics, setArrayComics] = useState<NewComicProps[]>([])

  async function loadComics() {
    await api
      .get('/comics')
      .then(response => setComics(response.data.data.results))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    loadComics()
  }, [])

  const comicsFilter = useMemo(() => {
    return comics.filter(comic => comic.title.toLowerCase().includes(search))
  }, [comics, search])

  function handleComic(comic: HomeProps) {
    setDataComic(comic)
    setComicModalOpen(true)
  }

  function handleCloseComicModal() {
    setComicModalOpen(false)
  }

  function handleOpenComicsSelecteds() {
    setComicsSelectedsModalOpen(true)
  }

  function handleCloseComicsSelectedsModal() {
    setComicsSelectedsModalOpen(false)
  }

  function handleAddOrRemoveComic(comicData: any, id: number) {
    const newComicSelected = {
      id: comicData.id,
      title: comicData.title,
      image: `${comicData.thumbnail.path}.${comicData.thumbnail.extension}`,
      description: comicData.variantDescription
    }

    if (arrayComics.length === 0) {
      setArrayComics(comics => [...comics, newComicSelected])
    } else {
      const findComic = arrayComics.find(comic => comic.id === id)
      if (findComic) {
        const filteredComics = arrayComics.filter(
          arrayComic => arrayComic.id !== id
        )
        setArrayComics(filteredComics)
      } else {
        setArrayComics(comics => [...comics, newComicSelected])
      }
    }
  }

  return (
    <Container>
      <ContainerHeader>
        <div className="background-color-header">
          <header>
            <img src={logoMarvel} alt="" />
            <div className="links">
              <a href="#">Home</a>
              <span>|</span>
              <a href="#comics">Comics</a>
            </div>
          </header>
        </div>
        <img src={imageHome} alt="" />
      </ContainerHeader>

      <Content id="comics">
        <header>
          <h1>Marvel Comics</h1>
          <div className="search_comic">
            <input
              type="text"
              onChange={(e: any) => setSearch(e.target.value)}
            />
            <BsSearch size={25} color="var(--orange)" />
          </div>
        </header>
        <main>
          {comicsFilter?.map(comic => (
            <div
              key={comic.id}
              onClick={() => handleAddOrRemoveComic(comic, comic.id)}
            >
              <Comics
                onClick={() => handleComic(comic)}
                image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                title={comic.title}
              />
            </div>
          ))}
        </main>

        <div
          className="button
 "
        >
          <button type="button" onClick={handleOpenComicsSelecteds}>
            imagens Selecionadas
          </button>
        </div>
      </Content>

      <ModalComics
        getComic={dataComic}
        onModalComicOpen={comicModalOpen}
        onRequestClose={handleCloseComicModal}
      />

      <ModalComicsSelecteds
        getComics={arrayComics}
        onModalComicsSelectedsOpen={comicsSelectedsModalOpen}
        onRequestClose={handleCloseComicsSelectedsModal}
      />
    </Container>
  )
}
