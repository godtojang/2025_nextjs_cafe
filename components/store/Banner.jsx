import Paragraph from '../common/typography/Paragraph';

const Banner = ({ title }) => {
  return (
    <div
      style={{ backgroundImage: `url('/store.jpg')` }}
      className={`h-[250px] bg-cover bg-center text-center flex items-center justify-center`}
    >
      <Paragraph className="text-white text-3xl">
        Store
        <br />
        우리들의 카페 위치
        {title}
      </Paragraph>
    </div>
  );
};

export default Banner;
