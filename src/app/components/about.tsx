import { handleWhatsAppClick } from "../../utils/function";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="mb-4">
        <button 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer" 
          onClick={handleWhatsAppClick}>
          Join now
        </button>
      </div>
      <div>
        <ul className="list-disc list-inside flex flex-col items-center gap-4">
          <li className="text-lg font-semibold">Are you looking for a way to make money online?</li>
          <li className="text-lg font-semibold">Do you have a day job and you're looking for a side hustle to make extra cash</li>
          <li className="text-lg font-semibold">Are you looking for a simple online business to start with low capital?</li>
        </ul>
      </div>
    </div>
  )
}
