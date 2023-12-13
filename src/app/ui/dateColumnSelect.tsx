import { transform } from '../lib/util/transformer'

export default function DateColumnSelect({ selected }: { selected: string[] }) {
  return (
    <select
      id="date-column-select"
      className="col-start-3 col-end-5 rounded-md"
    >
      <option key={-1}></option>
      {selected.map((c: string) => (
        <option key={c} value={c}>{`${transform(c)}`}</option>
      ))}
    </select>
  )
}
