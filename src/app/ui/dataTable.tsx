import { useState } from 'react'
import DataHeaderRow from './dataHeaderRow'
import { DataRowMemo } from './dataRow'

export default function DataTable({data, columns}: any) {
  const [selected, setSelected] = useState([])

  return (
    <div
      id="data-table"
      className="relative w-full overflow-x-auto sm:rounded-sm"
    >
      <table className="border-separate md:table ">
        <thead className="bg-blue-300 text-xs font-bold uppercase">
          <DataHeaderRow
            columns={columns}
            selected={selected}
            setSelected={setSelected} />
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
  )
}
