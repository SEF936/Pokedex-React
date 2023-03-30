

const NavBar = ({pokemon, pokemonIndex, setPokemonIndex}) => {

   

const handleBefore = () => {
    setPokemonIndex(pokemonIndex - 1);
  }
  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  }
 
  
  
  


return (
    
    <div>
    {pokemonIndex > 0 ? <button onClick={handleBefore}>Precedent </button> : null}
    {pokemonIndex <pokemon - 1 ? <button onClick={handleNext}>Suivant </button> : null }
    </div>
)


}

export default NavBar;