import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Frase from './components/frase';

const Contenedor = styled.div`
display: flex;
align-items: center;
padding-top: 5rem;
flex-direction: column-reverse;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: arial, helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;

  transition: background-size .8s ease;
  :hover {
    cursor:pointer;
    backgroud-size: 400px;
  }
  `;
function App() {


  const [frase,guardarFrase] = useState({});


  

  const consultarApi = async() =>{
    const result = await fetch('https://breakingbadapi.com/api/quote/random');
    const frase  = await result.json();
    
    guardarFrase(frase[0]);
    
  }

  useEffect( () =>{
    consultarApi()
  }, []);


  return (
    <Contenedor>
   
    <Boton onClick={consultarApi}>Obtener Frase</Boton>
    <Frase
      frase={frase}
    />
    </Contenedor>
  );
}

export default App;
