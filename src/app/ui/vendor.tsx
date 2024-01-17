export default function Vendor({vendor}: {vendor: string}) {

  return (
    <div className="items-center">
      <input
        id={vendor.toLowerCase()}
        name="datasource-type"
        type="radio"
        value={vendor.toLowerCase()}
        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
        aria-describedby="datasource-type-error"
      />
      <label
        htmlFor={vendor.toLowerCase()}
        className="px-3 text-sm font-medium"
      >
        {vendor}
      </label>
    </div>
  )
}
