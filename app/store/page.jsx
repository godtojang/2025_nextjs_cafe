import Container from '@/components/common/layout/Container';
import Banner from '@/components/store/Banner';
import KakaoMap from './KakaoMap';

const Page = () => {
  return (
    <>
      <Banner />
      <Container>
        <KakaoMap />
      </Container>
    </>
  );
};

export default Page;
