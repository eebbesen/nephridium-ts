export default function DataHeaderRow({ data }: any) {
  const keys = Object.keys(data[0])
  const keySlug = Date.now()

  return (
    <tr key={keySlug}>
      {keys.map((k) => (
        <th key={`${keySlug}${k}`}>{k}</th>
      ))}
    </tr>
  )
}
