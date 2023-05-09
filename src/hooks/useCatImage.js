import { useState, useEffect } from 'react'
import { getRandomImg } from '../services/facts'

export function useCatImage ({ fact }) {
  const [url, setUrl] = useState()
  useEffect(() => {
    if (!fact) return
    getRandomImg().then((newImg) => setUrl(newImg))
  }, [fact])

  return { url }
}
