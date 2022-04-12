//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class TvShow {
    constructor(title, year, numOfEpisodes, genre) {
        this.title = title
        this.year = year
        this. numOfEpisodes = numOfEpisodes
        this.genre = genre
    }
    play() {
        console.log('The episode starts')
    }
    nextEpiside() {
        console.log('The next episode starts')
    }
    previousEpisode() {
        console.log('The last episode starts')
    }
}

let avatar = new TvShow('Avatar: The Last Airbender', '2005', 61, 'comedy-drama')
console.log(avatar)
avatar.play()
avatar.nextEpiside()
avatar.previousEpisode()