const transformer = require('../lib/util/transformer')

let selected: string[] = []

function handleClick (target: string ): void {
  const i: number = selected.indexOf(target)
  if (i < 0) {
    selected = [...selected, target]
  } else {
    selected = (selected.toSpliced(i, 1))
  }
  console.log('selected: ', selected)
}

export default function DataHeaderRow({ columns }: any) {
  if (columns.length === 0) {
    return
  }

  return (
    <tr key={1}>
      {columns.map((c: string) => (
        // eslint-disable-next-line react/jsx-key
        <th className="pe-1 ps-1" onClick={() => {handleClick(c)}} key={c}>
          {transformer.transform(c)}
        </th>
      ))}
    </tr>
  )
}
