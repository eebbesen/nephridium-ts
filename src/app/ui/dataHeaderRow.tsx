const transformer = require('../lib/util/transformer')

// place the added value back in the dropdown at the appropriate index
export function addDateColumnOption(added: string, selected: string[], columns: string[]): string[] {
  const i: number = columns.indexOf(added)
  let spliced = [...selected]
  spliced.splice(i, 0, added)

  return spliced
}

export default function DataHeaderRow({ columns, selected, setSelected }: any) {
  if (columns.length === 0) {
    return
  }

  // todo: refactor to share state up the tree in a React way
  // todo: investigate using tailwind instead of direct styles
  const handleClick = (target: string, e: any): void => {
    const i: number = selected.indexOf(target)
    if (i < 0) {
      setSelected(addDateColumnOption(target, selected, columns))
      e.target.classList.replace('text-black', 'text-white')
      e.target.classList.replace('bg-blue-300', 'bg-black')
    } else {
      setSelected(selected.filter((c: string) => c !== target))
      e.target.classList.replace('text-white', 'text-black')
      e.target.classList.replace('bg-black', 'bg-blue-300')
    }
  }

  return (
    <tr key={1}>
      {columns.map((c: string) => (
        <th
          className={`pe-1 ps-1 ${
            selected.indexOf(c) < 0
              ? 'bg-blue-300 text-black'
              : 'bg-black text-white'
          }`}
          onClick={(e) => {
            handleClick(c, e)
          }}
          key={c}
        >
          {transformer.transform(c)}
        </th>
      ))}
    </tr>
  )
}
