'use client'

import { useState } from 'react'
import LoadingIndicator from './ui/loadingIndicator'
import { loadingStatus } from './ui/loadingStatus'
import useDataRequests from './lib/hooks/useDataRequests'
import Vendor from './ui/vendor'
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
    return <LoadingIndicator loadingState={loadingState} />
  }

  return (
    <main className="mx-auto space-y-5 p-1">
      <div id="search-components" className="space-y-3">
        <div
          id="search-url"
          className="grid gap-2 sm:grid-cols-2 md:grid-cols-9"
        >
          <button
            className="col-start-1 col-end-2 rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-400"
            onClick={handleSubmit}
          >
            Add Data
          </button>
          <input
            type="text"
            id="data-url"
            name="data-url"
            className="col-start-2 col-end-10 rounded-md"
            value={workingUrl}
            placeholder="Enter URL to Dataset"
            onChange={(e) => {
              setWorkingUrl(e.target.value)
            }}
          ></input>
        </div>
        <fieldset id="search-source">
          <div>
            <div className="grid justify-center sm:grid-cols-4 lg:grid-cols-9">
              <legend className="col-start-1 col-end-2 text-center">
                Vendor
              </legend>
              <Vendor vendor={'ArcGIS'} />
              <Vendor vendor={'Socrata'} />
              <Vendor vendor={'Raw'} />
            </div>
          </div>
        </fieldset>
      </div>
      <hr></hr>
      <DataTable data={data} columns={columns} />
    </main>
  )
}
