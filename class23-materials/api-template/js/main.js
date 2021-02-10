//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    //const isbn = document.querySelector('input').value
    const isbn = 'ISBN:0451526538'
    const url = `https://openlibrary.org/api/books?bibkeys=${isbn}&jscmd=data&format=json`
    // const isbn = '0451526538'
    // const url ='https://openlibrary.org/isbn/{isbn}.json // nicer data return
    // test isbn 9781449373320 // Designing Data-Intensive

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data)
          localStorage.setItem(isbn, data[isbn].title)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// get book back
// isbn
// user input

// long term
// enter books
// have books persist
/*
LocalStorgae best practices
JSONstringify
jsonParse
 */