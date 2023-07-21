import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import FAQ from "@/components/FAQ";
export default function Home() {
  return (
    <main className="max-w-[90%] mx-auto">
      <Navbar />
      <Main />
      <FAQ />
    </main>
  );
}
