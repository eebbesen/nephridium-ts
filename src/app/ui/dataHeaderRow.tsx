const transformer = require('../lib/util/transformer')

export default function DataHeaderRow({ columns }: any) {
  const keySlug = Date.now()

  return (
    <tr key={keySlug}>
      {columns.map((c: string) => (
        <th className="pe-1 ps-1" key={`${keySlug}${c}`}>
          {transformer.transform(c)}
        </th>
      ))}
    </tr>
  )
}
