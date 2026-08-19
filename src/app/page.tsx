import Header from "../components/Header";
import Statement from "../components/Statement";
import PortfolioMarquee from "../components/PortfolioMarquee";
import DynamicVisuals from "../components/DynamicVisuals";
import Workflow from "../components/Workflow";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main>
      <Header />
      <Statement />
      <PortfolioMarquee />
      <DynamicVisuals />
      <Workflow />
      <CTA />
    </main>
  );
}
