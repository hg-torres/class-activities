const shows = [
  {
    title: 'Sherlock',
    numEpisodes: '3',
    mainCharacter: 'Sherlock',
    synopsis: 'Private detective trys to solve mysteries'
  },
  {
    title: 'Squid Game',
    numEpisodes: '9',
    mainCharacter: 'Gi-hun',
    synopsis: 'Players try and win to get money'
  },
  {
    title: 'Blacklist',
    numEpisodes: '22',
    mainCharacter: 'Sherlock',
    synopsis: 'FBI team up with criminal to catch other criminals'
  },
  {
    title: 'Arcane',
    numEpisodes: '3',
    mainCharacter: 'Too many?',
    synopsis: 'Lore for league of legends'
  },
  {
    title: 'Loki',
    numEpisodes: '7',
    mainCharacter: 'Loki',
    synopsis: 'Loki showing us why hes the God of Mischief'
  }
  
]

for (let i = 0; i < shows.length; i++) {
  let showElem = document.createElement('div')
  showElem.innerHTML = `
        <h3>Title: ${shows[i].title}</h3>
        <h4>Number of Episodes: ${shows[i].numEpisodes}</h4>
        <h4>Main Character: ${shows[i].mainCharacter}</h4>
        <h4>Synopsis: ${shows[i].synopsis}</h4>
        <button class = "delete">Delete</button>
        <hr>
      `
  document.getElementById('tvShows').append(showElem)
}








document.getElementById('submit').addEventListener('click', event => {
  event.preventDefault()

  let userElem = document.createElement('div')
  userElem.innerHTML = `
        <h3>Title: ${document.getElementById('title').value}</h3>
        <h4>Number of Episodes:${document.getElementById('numEpisodes').value}</h4>
        <h4>Main Character:${document.getElementById('mainCharacter').value}</h4>
        <h4>Synopsis:${document.getElementById('synopsis').value}</h4>
        <button class = "delete">Delete</button>
        <hr>
      `
  document.getElementById('tvShows').append(userElem)

  document.getElementById('title').value = ''
  document.getElementById('numEpisodes').value = ''
  document.getElementById('mainCharacter').value = ''
  document.getElementById('synopsis').value = ''

})


document.addEventListener('click', event => {
  if (event.target.className === 'delete'){
    event.target.parentNode.remove()
  }
})