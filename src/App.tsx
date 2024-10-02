import Features from "./components/Features";
import Intro from "./components/Intro";
import Bright from "./components/Bright";
import Carousel from "./components/Carousel";
import Form from "./components/Form";
import Footer from "./components/Footer";
import AccordionSection from "./components/AccordionSection";

export default function App() {
  return (
    <main className="h-[100dvh]">
      <Intro />
      <Bright />
      <Features />
      <Carousel />
      <AccordionSection />
      <Form />
      <Footer />
    </main>
  );
}
