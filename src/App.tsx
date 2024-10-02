import Features from "./components/Features";
import Carousel from "./components/Carousel";
import Form from "./components/Form";
import Footer from "./components/Footer";
import AccordionSection from "./components/AccordionSection";
import Home from "./components/Home";

export default function App() {
  return (
    <main className="h-[60dvh]">
      <Home />
      <Features />
      <Carousel />
      <AccordionSection />
      <Form />
      <Footer />
    </main>
  );
}
