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
  const toRemove = columns.filter((c: string) => !selected.includes(c))
  const transformedUrl = stripParams(url)
  return (
    <div className="overflow-auto text-sm">
      <p>{`to_remove=${toRemove.join(',')}&url=${transformedUrl}`}</p>
    </div>
  )
}
