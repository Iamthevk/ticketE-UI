import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <main className="max-w-[90%] mx-auto">
        <Navbar />
        <Main />
        <FAQ />
        <Features />
      </main>
      <Footer />
    </>
  );
}
