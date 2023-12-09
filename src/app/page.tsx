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
    <main className="">
      <div className="container mx-auto p-2">
        <div className="container">
          <button className=""
            onClick={handleSubmit}
            >
            Add Data
          </button>
          <label htmlFor="data-url"></label>
          <input type="text"
            id="data-url"
            name="data-url"
            className="m-3"
            value={workingUrl}
            placeholder="Enter URL to Dataset"
            onChange={(e) => {setWorkingUrl(e.target.value)}}
            ></input>
        </div>
        <table className="">
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
