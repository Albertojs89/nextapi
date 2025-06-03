import ApiPage from "./api/page";
import HeroesPage from "./heroes/page";
import Imagenes from "./imagenes/page";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full text-white">
      
      {/* <ApiPage /> */}
      <Imagenes />
      {/* <HeroesPage /> */}
    </div>
  );
}
