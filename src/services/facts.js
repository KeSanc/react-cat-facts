const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const API_KEY = 'live_Sl4kx5kqBwpgoj2lL3QRMFWLcbfuMJbggW8frDigRgSjLYlACqNbKbUz4I37ff1i'
const CAT_ENDPOINT_IMAGE_URL = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}`

export async function getRandomFact () {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  return (data.fact)
}

export async function getRandomImg () {
  const res = await fetch(CAT_ENDPOINT_IMAGE_URL)
  const data = await res.json()
  return data[0].url
}
