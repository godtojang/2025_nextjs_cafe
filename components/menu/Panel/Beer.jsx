import Image from 'next/image';
import Text from '../../common/base/Text';

const Beer = ({ image, name, price, rating }) => {
  const makeRate = (average) => +String(average).slice(0, 4);

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="relative h-[300px] w-full">
        <Image className="object-cover" src={image} alt={''} fill />
      </div>
      <Text>
        {name}
        {makeRate(rating.average)}
      </Text>
      <Text>{price}</Text>
    </div>
  );
};

export default Beer;
