import React from 'react'

function cleaner(input: any) {
  const type = typeof input
  if (type === 'string' || type === 'number') {
    return input
  }

  return `*${type}*`
}

export default function DataRow({row}: any) {
  const keys = Object.keys(row)
  const key = row.id ? row.id : Date.now()

  return (
    <tr key={key}>
      {Object.keys(row).map((k, i) => (
        <td key={`${key}${i}`}>{cleaner(row[k])}</td>
      ))}
    </tr>
  )
}

export const DataRowMemo = React.memo(DataRow)
