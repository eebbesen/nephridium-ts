import React from 'react'

function cleaner(input: any) {
  const type = typeof input
  if (type === 'string' || type === 'number') {
    return input
  }

  return `*${type}*`
}

export default function DataRow({ row }: any) {
  const keys = Object.keys(row)
  const key = row.id ? row.id : Date.now()

  return (
    <tr className="odd:bg-white even:bg-gray-200" key={key}>
      {Object.keys(row).map((k, i) => (
        <td className="pe-1 ps-1" key={`${key}${i}`}>
          {cleaner(row[k])}
        </td>
      ))}
    </tr>
  )
}

export const DataRowMemo = React.memo(DataRow)
