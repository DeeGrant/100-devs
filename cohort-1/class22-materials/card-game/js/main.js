//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    console.log(choice)

    const url = ''

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data)
          switch (data.media_type) {
              case 'image':
                  updateImage(data)
                  break
              case 'video':
                  updateVideo(data)
                  break
              default:
                  alert('Media type not handled. Contact customer support.')
                  break
          }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function updateImage(data) {
    // reset()
    document.querySelector('img').src = data.hdurl
    document.querySelector('h3').innerText = data.explanation
}
function updateVideo(data) {
    // reset
    document.querySelector('iframe').src = data.url
    document.querySelector('h3').innerText = data.explanation
}

// TODO
// function for types
// switch statement
// titles, labels, etc. in html
