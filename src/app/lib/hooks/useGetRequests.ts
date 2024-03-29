import { useState, useCallback } from 'react'
import { loadingStatus } from '../../ui/loadingStatus'
import { identifySource, SourceTypes } from '../util/helper'
import { parseJSON } from '../util/arcgisHelper'

export default function useGetRequst(url: string) {
  const [loadingState, setLoadingState] = useState(loadingStatus.isLoading)

  const get = useCallback(
    async function () {
      setLoadingState(loadingStatus.isLoading)
      const sourceType = identifySource(url)

      try {
        const response = await fetch(url)
        const json = await response.json()
        const data = sourceType === SourceTypes.ArcGIS ? parseJSON(json) : json
        setLoadingState(loadingStatus.loaded)
        return data
      } catch (error) {
        setLoadingState(loadingStatus.hasErrored)
        console.log(error, 'URL', url)
      }
    },
    [url],
  )
  return { get, loadingState }
}
