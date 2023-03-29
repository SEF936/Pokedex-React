

const NavBar = ({pokemonIndex, setPokemonIndex}) => {

   

const handleBefore = () => {
    setPokemonIndex(pokemonIndex - 1);
  }
  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  }


return (
    
    <div>
    <button onClick={handleBefore}>Precedent </button>
    <button onClick={handleNext}>Suivant </button>
    </div>
)


}

export default NavBar;