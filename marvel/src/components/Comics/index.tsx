import { useState } from 'react'
import { Container, ContentCard, Button } from './styles'

interface ComicsProps {
  image: string

  title: string

  onClick: () => void

}

export function Comics({
  image,
  onClick,

  title,
 
}: ComicsProps) {
  const [comicSelected, setComicSelected] = useState(false)

  return (
    <Container>
      <ContentCard>
        <div className="image">
          <img src={image} onClick={onClick} alt={title} />
        </div>

        <Button
          isSelected={comicSelected === true}
          activeColor={'green'}
          onClick={() => setComicSelected(!comicSelected)}
        >
          {comicSelected ? 'selecionado' : 'selecionar'}
        </Button>
      </ContentCard>
    </Container>
  )
}
