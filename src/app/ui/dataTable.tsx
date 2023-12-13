import { useState } from 'react'
import DataHeaderRow from './dataHeaderRow'
import { DataRowMemo } from './dataRow'
import Output from './output'

export default function DataTable({ data, columns, url }: any) {
  const [selected, setSelected] = useState([])

  // todo: consider a ref here
  const toggleAll = () => {
    if (selected.length === 0) {
      setSelected(columns.slice())
    } else {
      setSelected([])
    }
  }

  return (
    <>
      <div id="output" className="grid gap-2 sm:grid-cols-2 md:grid-cols-9">
        <div className="col-start-1 col-end-10">
          <Output columns={columns} selected={selected} url={url} />
        </div>
      </div>
      <div
        id="toggle-all-div"
        className="grid gap-2 sm:grid-cols-2 md:grid-cols-9"
      >
        <button
          id="toggle-all"
          name="toggle-all"
          className="col-start-1 col-end-2 rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-400"
          onClick={toggleAll}
        >
          {selected.length > 0 ? 'Deselect All' : 'Select All'}
        </button>
      </div>
      <div
        id="data-table"
        className="relative w-full overflow-x-auto sm:rounded-sm"
      >
        <table className="border-separate md:table ">
          <thead className="bg-blue-300 text-xs font-bold uppercase">
            <DataHeaderRow
              columns={columns}
              selected={selected}
              setSelected={setSelected}
            />
          </thead>
          <tbody className="align-text-top text-xs">
            {data.map((r: any, i: number) => (
              <DataRowMemo
                key={r['id'] ? r['id'] : Date.now() * i}
                row={r}
                data={data}
                columns={columns}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
