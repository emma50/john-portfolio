import { handleWhatsAppClick } from "../../utils/function";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 w-full lg:w-2/3">
      <div className="mt-10 mb-6">
        <button 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer" 
          onClick={handleWhatsAppClick}>
          Join now
        </button>
      </div>
      <div className="flex flex-col items-center lg:items-start gap-4">
        <ul className="list-disc list-inside">
          <li className="text-lg font-semibold text-left">Are you looking for a way to make money online?</li>
          <li className="text-lg font-semibold">Do you have a day job and you're looking for a side hustle to make extra cash</li>
          <li className="text-lg font-semibold">Are you looking for a simple online business to start with low capital?</li>
        </ul>
      </div>
      <div className="mt-8 mb-4">
        <p className="font-semibold uppercase text-red-500 text-xl text-center lg:text-start">If you answered yes to any of these questions, then this is for you!</p>
      </div>
      <div className="flex flex-col items-center lg:items-start gap-4">
        <p className="text-lg font-semibold">I am about to reveal a business model that can make you earn money online without any stress.</p>
        <p>I'm about to reveal <span className="uppercase text-red-400">business secret </span>a that can make anyone stop being broke and which will help you dine and wine with the kings and queens...</p>
        <p>This business model does not require anyone to bring two people while the other two brings another two people.</p>
        <p>Even if you are not a tech-savvy type or don't have any experience as regards doing business online in the past. </p>
        <p>Or you are a 9 - 5 worker, a student, a stay at home mum/dad who is looking for a side hustle that can pay your bills</p>
        <p className="uppercase text-xl font-semibold self-start">Then this business is for you</p>
      </div>
      <div className="mt-12 mb-4">
        <p className="text-center lg:items-start">Unfortunately this <span className="text-xl uppercase">free training</span> is only available for the first <span className="text-xl">100 people, join now! </span></p>
      </div>
      <div className="my-10 flex flex-col items-center lg:items-start">
        <button 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer uppercase" 
          onClick={handleWhatsAppClick}>
          Join now
        </button>
      </div>
    </div>
  )
}
