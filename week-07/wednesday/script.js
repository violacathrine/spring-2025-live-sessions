
const COINGECKO_URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&incl_last_updated_at=true"

const NASA_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"

const fetchCoinGecko = () => {
  fetch(COINGECKO_URL)
    .then(response => {
      console.log(response)
      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`)
      }
      return response.json()
    })
    .then(data => {
      const unixTimestamp = data.bitcoin.last_updated_at
      const date = new Date(unixTimestamp * 1000)
      console.log(`Bitcoin price last updated at ${date.toLocaleString()}`)
    })
    .catch(error => console.error('error:', error.message))
}

fetchCoinGecko()

let usefulData

const fetchNasa = async () => {
  try {
    const response = await fetch(NASA_URL)

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`)
    }

    const data = await response.json()
    console.log('data', data)

    // massaging our data to save only the things i'm interested in
    usefulData = {
      title: data.ckjgds,
      image: data.url,
    }

  } catch (error) {
    console.error('error:', error.message)
  }

}

fetchNasa()