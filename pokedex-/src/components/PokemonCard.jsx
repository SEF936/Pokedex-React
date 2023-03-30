import PropTypes from "prop-types";
 
 function PokemonCard({pokemon}){


return ( 
  
     <figure>
       {pokemon.imgSrc ? <img src= {pokemon.imgSrc} alt= {pokemon.name} ></img> : <p>???</p>}
       <figcaption>{pokemon.name}</figcaption>
     </figure> 
     
);


}

// PokemonCard.PropTypes = {
//   pokemon: PropTypes.shape({
//   name: PropTypes.arrayOf(PropTypes.string).isRequired,
//   imgSrc: PropTypes.string,
  
// }),

// }





export default PokemonCard;
