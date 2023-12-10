'use client'

import { useState } from 'react'
import LoadingIndicator from './ui/loadingIndicator'
import { loadingStatus } from './ui/loadingStatus'
import useDataRequests from './lib/hooks/useDataRequests'
import DataSearch from './ui/dataSearch'
import DataTable from './ui/dataTable'

const { findMaximumKeys } = require('./lib/util/helper')

export default function Page() {
  const { data, url, setUrl, loadingState } = useDataRequests()
  const [workingUrl, setWorkingUrl] = useState('')
  const columns = findMaximumKeys(data)

  function handleSubmit() {
    setUrl(workingUrl)
  }

  if (url.length > 0 && loadingState !== loadingStatus.loaded) {
    return (
      <main className="mx-auto space-y-5 p-1">
        <DataSearch
          handleSubmit={handleSubmit}
          workingUrl={workingUrl}
          setWorkingUrl={setWorkingUrl}
        />
        <LoadingIndicator loadingState={loadingState} />
      </main>
    )
  } else
    return (
      <main className="mx-auto space-y-5 p-1">
        <DataSearch
          handleSubmit={handleSubmit}
          workingUrl={workingUrl}
          setWorkingUrl={setWorkingUrl}
        />
        <hr></hr>
        <DataTable data={data} columns={columns} />
      </main>
    )
}
