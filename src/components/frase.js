import React, {Fragment} from 'react';
import styled from 'styled-components';


const ContenedorFrase = styled.div`
padding: 3rem;
border-radius: .5rem;
background-color: #fff;
max-width: 800px;



    @media (min-width: 992px){
        margin-top: 10rem;        
    }

    h1{
        font-family: arial, helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &:: before{
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p{
        font-family: Genira, Verdana, Tohoma, sans-serif;
        font-size: 1.6rem;
        text-align: right;
        color: #666;
        margin-top: 2rem; 
    }
`;



const Frase = ({frase}) => {
    
    if(Object.keys(frase).length === 0) return null;
    
    return (<ContenedorFrase>
            
            <h1> {frase.quote}</h1>
            <p> {frase.author}</p>
            </ContenedorFrase>
              );
}
 
export default Frase;