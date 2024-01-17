import { transform } from '../lib/util/transformer'

export default function DateColumnSelect({
  selected,
  selectedDateColumn,
  setSelectedDateColumn,
}: Readonly<{
  selected: string[]
  selectedDateColumn: string
  setSelectedDateColumn: Function
}>) {
  function handleDateColumnChange(event: any) {
    const selected: string = event.target.selectedOptions[0].id
    setSelectedDateColumn(selected.split('option-')[1])
  }

  return (
    <select
      onChange={(e) => handleDateColumnChange(e)}
      value={selectedDateColumn}
      id="date-column-select"
      className="col-start-3 col-end-5 rounded-md"
    >
      <option
        key={-1}
        value=""
      >Select Date Column</option>
      {selected.map((c: string) => (
        <option
          key={c}
          value={c}
          id={`option-${c}`}
        >{`${transform(c)}`}</option>
      ))}
    </select>
  )
}
