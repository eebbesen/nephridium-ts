const transformer = require('../lib/util/transformer')

export default function DataHeaderRow({ columns, selected, setSelected }: any) {
  if (columns.length === 0) {
    return
  }

  // todo: refactor to share state up the tree ina React way
  // todo: investigate using tailwind instead of direct styles
  const handleClick = (target: string, e: any): void => {
    const i: number = selected.indexOf(target)
    if (i < 0) {
      setSelected([...selected, target])
      e.target.classList.replace('text-black', 'text-white')
      e.target.classList.replace('bg-blue-300', 'bg-black')
    } else {
      // setSelected(selected.toSpliced(i, 1))
      setSelected(
        selected.filter((c: string) => {
          c !== target
        }),
      )
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
