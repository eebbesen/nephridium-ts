import { stripParams } from '../lib/util/transformer'

export default function Output({
  columns,
  selected,
  selectedDateColumn,
  url,
}: {
  columns: string[]
  selected: string[]
  selectedDateColumn: string
  url: string
}) {
  const toRemove = columns
    .filter((c: string) => !selected.includes(c))
    .join(',')
  const timeColumn = selectedDateColumn
  const transformedUrl = stripParams(url)
  const ouputUrl =
    (timeColumn?.length > 0 ? `&time_column=${timeColumn}` : '') +
    (toRemove.length > 0 ? `&to_remove=${toRemove}` : '') +
    `&url=${transformedUrl}`

  return (
    <div className="overflow-auto text-sm">
      <p>{ouputUrl}</p>
    </div>
  )
}
