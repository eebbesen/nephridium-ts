const transformer = require('../lib/util/transformer')

export default function DataHeaderRow({ data }: any) {
  const keySlug = Date.now()
  const keys = Object.keys(data[0])

  return (
    <tr key={keySlug}>
      {keys.map((k) => (
        <th className="pe-1 ps-1" key={`${keySlug}${k}`}>
          {transformer.transform(k)}
        </th>
      ))}
    </tr>
  )
}
