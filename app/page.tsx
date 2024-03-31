import Categories from "@/components/Categories/Categories";
import Footer from "@/components/Footer/Footer";
import RecommendMovie from "@/components/RecommendMovie/Recommend";
import CarouselComponent from "@/components/Slider/ImageSlider";
import { sliderMovie } from "@/api/data";
export default function Home() {
  return (
    <div>
      <CarouselComponent sliders={sliderMovie} />
      <Categories />
      <RecommendMovie title="Все" sortGanre="" />
      <RecommendMovie title="Комедийные фильмы" sortGanre="Комедия" />
      <RecommendMovie title="Триллеры" sortGanre="Триллер" />
      <RecommendMovie title="Криминальные" sortGanre="Криминал" />
      <RecommendMovie title="Драма" sortGanre="Драма" />
      <Footer />
    </div>
  );
}
