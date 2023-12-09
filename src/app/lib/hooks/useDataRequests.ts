import { useEffect, useState } from 'react'
import useGetRequst from './useGetRequests'

export default function useDataRequests() {
  const [data, setData] = useState([{ id: 'No data yet' }])
  const [url, setUrl] = useState('')
  const { get, loadingState } = useGetRequst(url)

  useEffect(() => {
    async function updateData() {
      const newData = await get()
      setData(newData)
    }
    if (url.length > 1) {
      updateData()
    }
  }, [get, url])

  return { data, setData, url, setUrl, loadingState }
}
