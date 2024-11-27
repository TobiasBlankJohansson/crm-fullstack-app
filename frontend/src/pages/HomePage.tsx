import { Carousel } from "../components/Carousel";
import { HomePageHeader } from "../components/HomePageHeader";

export function HomePage() {
  return (
    <div>
      <HomePageHeader />
      <div className="h-screen flex items-center justify-center">
        <Carousel />
      </div>
    </div>
  );
}
