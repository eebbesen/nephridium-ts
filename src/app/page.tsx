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
    <main className="mx-auto p-1 bg-amber-200">
      <div className="">
        <div className="flex bg-amber-300">
          <button className=""
            onClick={handleSubmit}
            >
            Add Data
          </button>
          <label htmlFor="data-url"></label>
          <input type="text"
            id="data-url"
            name="data-url"
            className="grow m-3 bg-amber-400"
            value={workingUrl}
            placeholder="Enter URL to Dataset"
            onChange={(e) => {setWorkingUrl(e.target.value)}}
            ></input>
        </div>
        <fieldset className="flex">
          <div className="py-3 bg-amber-600">
            <div className="flex gap-4">
              <legend className="block">
                Vendor
              </legend>
              <div className="flex items-center">
                <input
                  id="arcgis"
                  name="datasource-type"
                  type="radio"
                  value="arcgis"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby='datasource-type-error'
                />
                <label htmlFor="arcgis" className="px-3 block text-sm font-medium">
                  ArcGIS
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="soctrata"
                  name="datasource-type"
                  type="radio"
                  value="socrata"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby='datasource-type-error'
                />
                <label htmlFor="socrata" className="px-3 block text-sm font-medium">
                  Socrata
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>


      <div>
        <table className="bg-amber-400">
          <thead>
            <DataHeaderRow data={data}/>
          </thead>
          <tbody className="">
            {data.map((r, i) => (
              <DataRowMemo key={ r.id ? r.id : Date.now() * i } row={r}/>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
