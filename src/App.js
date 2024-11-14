import "./App.css";
import TopNavigation from "./TopNavigation";
import MediaSection from "./MediaSection";
import FooterSection from "./FooterSection";

function App() {
  return (
    <section className="bg-[#fcf4e9] min-h-screen w-screen flex flex-col">
      <TopNavigation />

      <MediaSection />
      <FooterSection />
    </section>
  );
}

export default App;
