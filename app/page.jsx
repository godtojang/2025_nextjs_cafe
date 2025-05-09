import Contents from '@/components/home/contents/Contents';
import Aside from '@/components/home/aside/Aside';
import MdSlider from '@/components/home/mdSlider/MdSlider';
import Slider from '@/components/home/Slider/Slider';

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
