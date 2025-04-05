import GetStarted from "./components/GetStarted";
import HeroOne from "./components/HeroOne";

export default function Home() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto bg-white">
      <HeroOne />
      <GetStarted />
    </div>
  );
}
