import Contents from "@/components/home/contents/Contents";
import Slider from "@/components/home/slider/Slider";
import Aside from "@/components/home/aside/Aside";
import MdSlider from "@/components/home/mdSlider/MdSlider";

export default function Home() {
  return (
    <>
      <Aside />
      <Slider />
      <Contents />
      <MdSlider />
    </>
  );
}
