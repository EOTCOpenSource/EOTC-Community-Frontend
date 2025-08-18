import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CommunityIntro from "./components/CommunityIntro";
import Purpose from "./components/Purpose";


export default function Home() {
  return (
    <> 
    <Navbar />
    <Hero />
    <CommunityIntro />
    <Purpose />
    <Footer />
    </>
  );
}