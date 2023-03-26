const superHDiv = document.getElementById('superH')
const basicURL = 'https://superheroapi.com/api.php/790709589340466'
const getNewHero = document.getElementById('newHero')
const heroName = document.getElementById('heroName')
const getHeroSearch = document.getElementById('search')



const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
  }


  const heroInfo = (character) =>{
    const heroHead = `<h1>${character.name}</h1>`
    const img = `<img src="${character.image.url}" height=200 width=200>`
    const stats = Object.keys(character.powerstats).map(stats => {
        return `<p>${statToEmoji[stats]} ${stats.toUpperCase()}: ${character.powerstats[stats]}`
    }).join('')

    superHDiv.innerHTML = `${heroHead} ${img} ${stats}`
    
  }


const superHero = (id) => {
        fetch(`${basicURL}/${id}`)
        .then(respons => respons.json())
        .then(json => {
            console.log(json)
            heroInfo(json)
        })
    
}


const superHeroSearch = (name) => {
    
    fetch(`${basicURL}/search/${name}`)
        .then(respons => respons.json())
        .then(json => {
            const hero = json.results[0]
            heroInfo(hero)
        })
}
const randomHero = () => {
    const heroNumber = 731
    return Math.floor(Math.random()*heroNumber) +1
}
getNewHero.onclick = () => superHero(randomHero())
getHeroSearch.onclick = () => superHeroSearch(heroName.value)