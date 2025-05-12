
export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center h-24 bg-gray-200 w-full">
      <p className="text-center text-gray-500 text-sm">
        &copy; 2025 - {new Date().getFullYear()} Created with ❤️ by Emma50.
      </p>
    </div>
  )
}
