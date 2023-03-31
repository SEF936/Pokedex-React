

const NavBar = ({pokemonIndex, setPokemonIndex, pokemonList}) => {

if(pokemonIndex === 3 ){
    alert ("pika pika !!")
}


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