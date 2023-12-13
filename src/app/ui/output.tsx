import { stripParams } from '../lib/util/transformer'

export default function Output({
  columns,
  selected,
  url,
}: {
  columns: string[]
  selected: string[]
  url: string
}) {
  const toRemove = columns
    .filter((c: string) => !selected.includes(c))
    .join(',')
  const transformedUrl = stripParams(url)
  const ouputUrl =
    toRemove.length > 0
      ? `toRemove=${toRemove}&url=${transformedUrl}`
      : `&url=${transformedUrl}`

  return (
    <div className="overflow-auto text-sm">
      <p>{ouputUrl}</p>
    </div>
  )
}
