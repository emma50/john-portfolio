import About from "../components/about";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  )
}
