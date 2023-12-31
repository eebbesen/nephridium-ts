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

  return (
    <main className="mx-auto space-y-5 p-1">
      <DataSearch
        handleSubmit={handleSubmit}
        workingUrl={workingUrl}
        setWorkingUrl={setWorkingUrl}
      />
      <hr></hr>
      {url.length > 0 ? (
        loadingState !== loadingStatus.loaded ? (
          <LoadingIndicator loadingState={loadingState} />
        ) : (
          <DataTable data={data} columns={columns} url={url} />
        )
      ) : (
        <></>
      )}
    </main>
  )
}
