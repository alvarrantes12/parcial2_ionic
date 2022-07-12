import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

function UseApi(url: any) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  interface fetchNamedParams {
    apiUrl: any
    method?: string
  }
  const customFetch = useCallback(
    ({ apiUrl, method = 'get' }: fetchNamedParams) => {
      setLoading(true)
      axios({
        method: method,
        url: apiUrl,
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      })
        .then((response) => {
          setData(response.data)
        })
        .catch((err) => {
          setError(err)
        })
        .finally(() => {
          setLoading(false)
        })
    },
    []
  )
  useEffect(() => {
    customFetch({ apiUrl: url })
  }, [url, customFetch])


  return { data, loading, error }
}

export default UseApi
