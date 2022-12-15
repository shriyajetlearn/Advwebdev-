class Movie {
    constructor(title, director, year) {
      this.title = title
      this.director = director
      this.year = year
      }
}

const defaultMovies = [
    {
    title: 'Jurassic Park',
    director: 'John Doe',
    year: '1990'
    },
    {
    title: 'The Dead Pool',
    director: 'Mathew Albison',
    year: '2014'
    },
    {
    title: 'The Avengers',
    director: 'Joss Whedon',
    year: '2012'
    }
]
class UI{

static addMovieToList = (movie) => {
    const list = document.getElementById('movie-list');
    const row = document.createElement('tr')
    row.innerHTML=`<td>${movie.title}</td><td>${movie.director}</td><td>${movie.year}</td>`
    
        list.appendChild(row)
        }
    static displayMovies=()=>{
        defaultMovies.forEach(movie => UI.addMovieToList(movie))
    }
    
    
   
}
UI.displayMovies()

document.querySelector('#movie-form').addEventListener('submit', addAMovie)

    function addAMovie(e) {
    // prevent actual submission
    e.preventDefault()
    // Get Form Values
       const title =document.querySelector('#title').value;
       const director =document.querySelector('#director').value;
       const year =document.querySelector('#year').value;
    
    // Instantiate a new Book object
    const movie = new Movie(title,director,year)
    // Add object to UI
      UI.addMovieToList(movie)
    }

   





