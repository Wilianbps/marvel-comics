import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


:root{
  
   --red: #ED1D24;
   --green:#33cc95;
   --orange: #ef5230;
   --text-title: #363f5f;
   --text-body:#969cb3;

  
 }

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  @media (max-width: 1080px){
    font-size: 93.75%;
  }
  @media(max-width: 720){
    font-size: 87.5%;
  }
}

body{
  
  -webkit-font-smoothing:antialiased;

}

body, input, textarea, button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5 ,h6, strong{
  font-weight: 600;
}

button{
  cursor:pointer;
}

.react-modal-comics{
  width: 100%;
  position: absolute;
  max-width:36rem;
    top: 150px;
    bottom: 150px;
    left: 600px;
    right: 600px;
    background-color: white;
    padding: 1rem ;
    border:1px solid var(--text-body) ;
    border-radius:0.625rem ;

    }

    .react-modal-comics-selecteds{
  position: absolute;
    top: 40px;
    bottom: 40px;
    left: 40px;
    right: 40px;
    background-color: white;
    padding: 1rem ;
    border:1px solid var(--text-body) ;
    border-radius:0.625rem ;

    overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: whitesmoke;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--text-body);
    border-radius: 20px;
    border: 3px solid whitesmoke;
  }
    }
    overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: whitesmoke;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--text-body);
    border-radius: 20px;
    border: 3px solid whitesmoke;
  }
    
`
