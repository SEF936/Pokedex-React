import PropTypes from "prop-types";
 
 function PokemonCard({pokemon}){


return ( 
  
     <figure>
       {pokemon.imgSrc ? <img src= {pokemon.imgSrc} alt= {pokemon.name} ></img> : <p>???</p>}
       <figcaption>{pokemon.name}</figcaption>
     </figure> 
     
);


}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  
}),

}
console.log(PokemonCard.propTypes);




export default PokemonCard;
