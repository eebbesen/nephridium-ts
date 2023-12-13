import { transform } from '../lib/util/transformer'

export default function DateColumnSelect({
  selected,
  selectedDateColumn,
  setSelectedDateColumn,
}: {
  selected: string[]
  selectedDateColumn: string
  setSelectedDateColumn: Function
}) {
  function handleDateColumnChange(event: any) {
    const selected: string = event.target.selectedOptions[0].id
    setSelectedDateColumn(selected.split('option-')[1])
  }

  return (
    <select
      onChange={(e) => handleDateColumnChange(e)}
      id="date-column-select"
      className="col-start-3 col-end-5 rounded-md"
    >
      <option
        key={-1}
        id="option"
        selected={selectedDateColumn.length === 0}
      ></option>
      {selected.map((c: string) => (
        <option
          key={c}
          value={c}
          id={`option-${c}`}
          selected={c === selectedDateColumn}
        >{`${transform(c)}`}</option>
      ))}
    </select>
  )
}
