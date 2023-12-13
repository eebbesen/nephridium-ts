import React from 'react'
import { cleaner, truncate } from '../lib/util/transformer'

export default function DataRow({ row, columns }: any) {
  if (columns === null || columns === undefined) {
    return <></>
  }

  const key = row.id ? row.id : Date.now()

  return (
    <tr className="odd:bg-white even:bg-gray-200" key={`${key}`}>
      {columns.map((k: string | number, i: number) => (
        // eslint-disable-next-line react/jsx-key
        <td className="pe-1 ps-1">
          {truncate(cleaner(row[k]))}
        </td>
      ))}
    </tr>
  )
}

export const DataRowMemo = React.memo(DataRow)
