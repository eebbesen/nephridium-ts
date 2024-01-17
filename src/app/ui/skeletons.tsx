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
        >
        </button>

        <select className="col-start-3 col-end-5 rounded-md bg-inherit"></select>
      </div>
  )
}

function DataHeaderRowSkeleton() {
  return (
    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-9 text-xs text-gray-300">
      {seed.map((r: any, i: number) => (
        <DataHeaderRowCellSkeleton key={`${i}-h`} />
      ))}
    </div>
  )
}

function DataHeaderRowCellSkeleton({ key }: { readonly key: string }) {
  return (
    <div key={key} className="bg-gray-300 mr-1">HEADER</div>
  )
}

function DataRowSkeleton() {
  return (
    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-9 text-xs text-gray-200 mt-2">
      {seed.map((r: any, i: number) => (
        <DataRowCellSkeleton key={`${i}-h`} />
      ))}
    </div>
  )
}

function DataRowCellSkeleton({ key }: { readonly key: string }) {
  return (
    <div key={key} className="bg-gray-200 mr-1">DC</div>
  )
}

function DataTableSkeleton() {
  return (
    <div id="table-skeleton" className="mt-3">
      <DataHeaderRowSkeleton />

      {
        seed.map((r: any, i: number) => (
          <DataRowSkeleton key={`${i}-dr`} />
        ))
      }

    </div>
  )
}

export function DataSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-md bg-gray-100 p-2 shadow-sm`}
    >
    <DataSourceSkeletion />
    <DataTableSkeleton />
    </div>
  )
}
