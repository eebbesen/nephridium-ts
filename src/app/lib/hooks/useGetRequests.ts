import { useState, useCallback } from 'react'
import { loadingStatus } from '../../ui/loadingStatus'

export default function useGetRequst(url: string) {
  const [loadingState, setLoadingState] = useState(loadingStatus.isLoading)

  const get = useCallback(async function() {
    setLoadingState(loadingStatus.isLoading)
      try{
        const response = await fetch(url)
        const json = await response.json()
        setLoadingState(loadingStatus.loaded)
        return json
      } catch (error) {
        setLoadingState(loadingStatus.hasErrored)
        console.log(error)
      }
  }, [url])
  return { get, loadingState }
}
