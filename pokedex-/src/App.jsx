import PropTypes from "prop-types"
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"
import { useEffect, useState } from "react";

const pokemonList = [

  {
  
      name: "bulbasaur",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  
    },
  
    {
  
      name: "charmander",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  
    },
  
    {
  
      name: "squirtle",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  
    },
  
    {
  
      name: "pikachu",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  
    },
  
    {
  
      name: "mew",
  
    },
  
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState (0);

  useEffect(
    () => {
      alert ("hello pokemon trainer :)");   
    },
    
    
  )

  useEffect(
    () => {
      if (pokemonList[pokemonIndex].name === "pikachu"){
        alert("pika pikachu !!!");
      }},
      
     
  )
  

  return (
          
      <div> 
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <NavBar pokemon={pokemonList.length} pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex}/>
       </div>
  )
}

export default App
