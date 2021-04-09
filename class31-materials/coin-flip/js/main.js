document.querySelector('#flipCoin').addEventListener('click', flip)

async function flip() {
    let coin = document.querySelector('#coin')

    const res = await fetch('/api')
    const coinData = await res.json()
    console.log(coinData)

    coin.innerHTML = coinData.face
}