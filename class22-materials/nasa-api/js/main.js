document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    console.log(choice)

    const nasa_api_key = ''
    const url = `https://api.nasa.gov/planetary/apod?api_key=${nasa_api_key}&date=${choice}`

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
    reset()
    document.querySelector('img').src = data.url
    document.querySelector('h4').innerText = data.explanation
}
function updateVideo(data) {
    reset()
    document.querySelector('iframe').src = data.url
    document.querySelector('h4').innerText = data.explanation
}
function reset() {
    document.querySelector('iframe').src = ''
    document.querySelector('img').src = ''
    document.querySelector('h4').innerText = 'Description'
}

// TODO
// Style page