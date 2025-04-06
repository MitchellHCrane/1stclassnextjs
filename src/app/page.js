import GetStarted from "./components/GetStarted";
import HeroOne from "./components/HeroOne";
import MainCTA from "./components/MainCTA";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto bg-white">
      <HeroOne />
      <GetStarted />
      <MainCTA />
    </div>
  );
}
