export default function DataSearch({
  handleSubmit,
  workingUrl,
  setWorkingUrl,
}: Readonly<{
  handleSubmit: () => void
  workingUrl: string
  setWorkingUrl: (val: string) => void
}>) {
  return (
    <div id="search-components">
      <div id="search-url" className="grid gap-2 sm:grid-cols-2 md:grid-cols-9">
        <button
          id="search-button"
          name="search-button"
          className="col-start-1 col-end-2 rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-400"
          onClick={handleSubmit}
        >
          Add Data
        </button>
        <input
          type="text"
          id="data-url"
          name="data-url"
          className="col-start-2 col-end-10 rounded-md"
          value={workingUrl}
          placeholder="Enter URL to Dataset"
          aria-label="URL to dataset"
          onChange={(e) => {
            setWorkingUrl(e.target.value)
          }}
        ></input>
      </div>
      <fieldset id="search-source">
        <div>
          <div className="grid justify-center sm:grid-cols-4 lg:grid-cols-9"></div>
        </div>
      </fieldset>
    </div>
  )
}
