const transformer = require('../lib/util/transformer')

let selected: string[] = []

// todo: refactor to share state up the tree ina React way
function handleClick (target: string, e: any ): void {
  const i: number = selected.indexOf(target)
  if (i < 0) {
    selected = [...selected, target]
    e.target.style.color = 'white'
    e.target.style.background = 'black'
  } else {
    selected = (selected.toSpliced(i, 1))
    e.target.style.color = 'black'
    e.target.style.background = 'rgb(147 197 253)'
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
        <th className="pe-1 ps-1" onClick={(e) => {handleClick(c, e)}} key={c}>
          {transformer.transform(c)}
        </th>
      ))}
    </tr>
  )
}
