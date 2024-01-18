// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent'

const seed: Array<number> = new Array(9).fill(0)

function DataSourceSkeletion() {
  return (
    <div
      id="search-skeleton"
      className="grid gap-2 sm:grid-cols-2 md:grid-cols-9"
    >
      <button
        className="col-start-1 col-end-2 rounded-md bg-blue-500 px-4 py-2 text-white"
        disabled={true}
      ></button>

      <select className="col-start-3 col-end-5 rounded-md bg-inherit"></select>
    </div>
  )
}

function DataHeaderRowSkeleton() {
  return (
    <div className="grid gap-2 text-xs text-gray-300 sm:grid-cols-2 md:grid-cols-9">
      {seed.map((r: number, i: number) => (
        <DataHeaderRowCellSkeleton key={`${i}-h`} id={`${i}-h`} />
      ))}
    </div>
  )
}

function DataHeaderRowCellSkeleton({ id }: { readonly id: string }) {
  return (
    <div id={id} className="mr-1 bg-gray-300">
      HEADER
    </div>
  )
}

function DataRowSkeleton() {
  return (
    <div className="mt-2 grid gap-2 text-xs text-gray-200 sm:grid-cols-2 md:grid-cols-9">
      {seed.map((r: number, i: number) => (
        <DataRowCellSkeleton key={`${i}-h`} id={`${i}-h`} />
      ))}
    </div>
  )
}

function DataRowCellSkeleton({ id }: { readonly id: string }) {
  return (
    <div id={id} className="mr-1 bg-gray-200">
      DC
    </div>
  )
}

function DataTableSkeleton() {
  return (
    <div id="table-skeleton" className="mt-3">
      <DataHeaderRowSkeleton />

      {seed.map((r: number, i: number) => (
        <DataRowSkeleton key={`${i}-dr`} />
      ))}
    </div>
  )
}

export function DataSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-md bg-gray-100 p-2 shadow-sm`}
    >
      <p className="mt-5 overflow-auto text-sm text-white">Aplaceholder</p>
      <DataSourceSkeletion />
      <DataTableSkeleton />
    </div>
  )
}
