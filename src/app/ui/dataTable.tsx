import DataHeaderRow from './dataHeaderRow'
import { DataRowMemo } from './dataRow'

export default function DataTable(props: any) {
  const data = props.data
  const columns = props.columns

  return (
      <div
        id="data-table"
        className="relative w-full overflow-x-auto sm:rounded-sm">
        <table className="border-separate md:table ">
          <thead className="bg-blue-300 text-xs font-bold uppercase">
            <DataHeaderRow columns={columns} />
          </thead>
          <tbody className="align-text-top text-xs">
            {data.map((r: any, i: number) => (
              <DataRowMemo key={r['id'] ? r['id'] : Date.now() * i} row={r} data={data} columns={columns} />
            ))}
          </tbody>
        </table>
      </div>
  )
}