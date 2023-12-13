const transformer = require('../lib/util/transformer')

export default function DataHeaderRow({ columns }: any) {
  const keySlug = Date.now()

  if (columns.length === 0) {
    return
  }

  return (
    <tr key={keySlug}>
      {columns.map((c: string) => (
        // eslint-disable-next-line react/jsx-key
        <th className="pe-1 ps-1" >
          {transformer.transform(c)}
        </th>
      ))}
    </tr>
  )
}
