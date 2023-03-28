const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
 
 function PokemonCard(){
    const pokemon = pokemonList[0];


return ( 
  
     <figure>
       {pokemon.imgSrc === pokemonList[0].imgSrc ? <img src= {pokemonList[0].imgSrc} alt= {pokemonList[0].name}></img> : <p>???</p>}
       <figcaption>{pokemon.name}</figcaption>
     </figure> 
     
);


};



export default PokemonCard;
