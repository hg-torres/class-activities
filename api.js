function retrieveData(pokemonName){

  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(res => {
      const pokemon = res.data
      console.log(pokemon)
      let pokeName = pokemon.species.name
      console.log(pokeName)
      console.log(pokeName)
      

      if (pokeName) {
        document.getElementById('pokeNames').innerHTML = `${pokeName}`
        document.getElementById('pokeImage').innerHTML = `
    <img src="${pokemon.sprites.other.home.front_default}" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">`
        document.getElementById('pokeType').innerHTML = `Type: ${pokemon.types[0].type.name}`
        document.getElementById('pokeInfo').innerHTML = `
    Pokedex ID: ${pokemon.id} <br>
    Weight: ${pokemon.weight} <br>
    Height: ${pokemon.height} `

        document.getElementById('baseForm').addEventListener('click', () => {
          document.getElementById('pokeImage').innerHTML = `
    <img src="${pokemon.sprites.other.home.front_default}" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">`
        })
        document.getElementById('shinyForm').addEventListener('click', () => {
          document.getElementById('pokeImage').innerHTML = `
    <img src="${pokemon.sprites.other.home.front_shiny}" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">`
        })

      } else {
        document.getElementById('displayPoke').innerHTML = `<h1>No Pokemon Found</h1>`
      }

      document.getElementById('title').value = ''
    })
    .catch(err => console.log(err))

}
retrieveData('umbreon')


document.getElementById('searchBtn').addEventListener('click', event => {
  event.preventDefault()
  pokemonName = document.getElementById('pokeName').value
  retrieveData(pokemonName)
})

  