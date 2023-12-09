'use client'

import { useState } from 'react'
import LoadingIndicator from './ui/loadingIndicator'
import { loadingStatus } from './ui/loadingStatus'
import useDataRequests from './lib/hooks/useDataRequests'
import DataHeaderRow from './ui/dataHeaderRow'
import { DataRowMemo } from './ui/dataRow'

export default function Page() {
  const { data, url, setUrl, loadingState } = useDataRequests()
  const [workingUrl, setWorkingUrl] = useState('')

  function handleSubmit(){
    setUrl(workingUrl)
  }

  if (url.length > 0 && loadingState !== loadingStatus.loaded) {
    return <LoadingIndicator loadingState={loadingState} />
  }

  return (
    <main className="mx-auto p-1 space-y-5">
      <div id="search-components" className="space-y-3">
        <div id="search-url" className="grid md:grid-cols-9 sm:grid-cols-2 gap-2">
          <button className="col-start-1 col-end-2 rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-400"
            onClick={handleSubmit}
            >
            Add Data
          </button>
          <input type="text"
            id="data-url"
            name="data-url"
            className="col-start-2 col-end-10 rounded-md"
            value={workingUrl}
            placeholder="Enter URL to Dataset"
            onChange={(e) => {setWorkingUrl(e.target.value)}}
            ></input>
        </div>
        <fieldset id="search-source">
          <div>
            <div className="grid lg:grid-cols-9 md:grid-cols-6 sm:grid-cols-3 justify-center">
              <legend className="col-start-1 col-end-2 text-center">
                Vendor
              </legend>
              <div className="items-center">
                <input
                  id="arcgis"
                  name="datasource-type"
                  type="radio"
                  value="arcgis"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby='datasource-type-error'
                />
                <label htmlFor="arcgis" className="px-3 text-sm font-medium">
                  ArcGIS
                </label>
              </div>
              <div className="items-center">
                <input
                  id="soctrata"
                  name="datasource-type"
                  type="radio"
                  value="socrata"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby='datasource-type-error'
                />
                <label htmlFor="socrata" className="px-3 text-sm font-medium">
                  Socrata
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <hr></hr>
      <div id="data-table" className="relative overflow-x-auto sm:rounded-sm w-full">
        <table className="md:table border-2 border-black-300 border-separate ">
          <thead className="uppercase text-xs font-bold bg-blue-300 ">
            <DataHeaderRow data={data}/>
          </thead>
          <tbody className="text-xs align-text-top">
            {data.map((r, i) => (
              <DataRowMemo key={ r.id ? r.id : Date.now() * i } row={r}/>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
