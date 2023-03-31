

const NavBar = ({pokemonIndex, setPokemonIndex, pokemonList}) => {

   const handleClick = (index) => {
    setPokemonIndex ((pokemonIndex = index));
   }



return (
    
    <div>
        {pokemonList.map((item, index) => 
        <button key={item.name} onClick={ () => handleClick(index)}>
            {item.name}</button>
        )}
    
   
    
    </div>
)


}

export default NavBar;