import CallToAction from "../sections/CallToAction";
import { Companies } from "../sections/Companies";
import { Products } from "../sections/Products";
import { Features } from "../sections/Features";
import Footer from "../sections/Footer";
import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import { Pricing } from "../sections/Pricing";
import About from "../sections/About";
// import Testimonials from "../sections/Testimonials";

export default function Home() {
  return <>
  <Header />
  <Hero />
  <Companies />
  <Products />
  <Features />
  <Pricing />
  <About />
  {/* <Testimonials /> */}
  <CallToAction />

  <Footer />
  </>;
}
