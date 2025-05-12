export default function Header() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-blue-500">
      <div className="invisible">This is an empty and invisible div</div>
      <div className="flex flex-col items-center justify-center gap-6 p-4 bg-white shadow-md w-full lg:w-2/3">
        <p className="text-4xl font-bold text-red-400 uppercase text-center">Free training reveals.</p>
      </div>
    </div>
  )
}
