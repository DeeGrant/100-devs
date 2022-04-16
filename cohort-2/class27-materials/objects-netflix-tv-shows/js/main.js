//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class TvShow {
    constructor(title, genre, year, rating, seasons) {
        this.title = title
        this.genre = genre
        this.year = year
        this.rating = rating
        this.seasons = seasons
    }
    play(){
        console.log(`Playing ${this.title}!`)
    }
    canIWatchThis(age) {
        const ratingAge = TvShow.getRatingAge(this.rating)
        console.log(`You can${age < ratingAge ? "'t" : ''} watch.`) ;
    }
    static getRatingAge(rating) {
        switch (rating) {
            case 'TV-Y7':
                return 7;
            case 'PG-13':
                return 13;
            case 'TV-14':
                return 15;
            case 'PG':
                return 4
        }
    }
}

let Arcane = new TvShow('Arcane', 'Fantasy', 2021, 'TV-14', 1)
Arcane.play()
Arcane.canIWatchThis(12)
Arcane.canIWatchThis(24)
