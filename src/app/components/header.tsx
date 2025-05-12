export default function Header() {
  return (
    <div className="w-full lg:w-2/3 flex flex-col items-center justify-center bg-blue-500">
      <div className="invisible">This is an empty and invisible div</div>
      <div className="flex flex-col items-center justify-center gap-6 p-4 bg-white shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Our App</h1>
        <p className="text-xl font-bold text-red-400 uppercase">Free training reveals.</p>
      </div>
    </div>
  )
}
