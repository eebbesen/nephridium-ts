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
  const ouputUrl =
    (timeColumn?.length > 0 ? `&time_column=${timeColumn}` : '') +
    (toRemove.length > 0 ? `&to_remove=${toRemove}` : '') +
    `&url=${url}`

  return (
    <div className="overflow-auto text-sm">
      <p>{ouputUrl}</p>
    </div>
  )
}
