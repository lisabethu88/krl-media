import "./App.css";
import TopNavigation from "./TopNavigation";
import MainSection from "./MainSection";
import FooterSection from "./FooterSection";
import { useState } from "react";

function App() {
  const [selectedSection, setSelectedSection] = useState("images");

  return (
    <section className="bg-[#fcf4e9] min-h-screen flex flex-col">
      <TopNavigation setSelectedSection={setSelectedSection} />
      <MainSection selectedSection={selectedSection} />
      <FooterSection />
    </section>
  );
}

export default App;
