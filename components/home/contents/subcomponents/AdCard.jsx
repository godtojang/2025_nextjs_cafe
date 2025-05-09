import PillButton from "@/components/common/button/PillButton";
import Heading from "@/components/common/typography/Heading";
import Paragraph from "@/components/common/typography/Paragraph";
import Image from "next/image";

const AdCard = ({ imageUrl, title, subTitle, buttonTitle }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-5 w-full">
      <div className={`h-[150px] w-full relative`}>
        <Image alt="" className="object-cover" fill src={imageUrl} />
      </div>
      <Heading level={5}>{title}</Heading>
      <Paragraph>{subTitle}</Paragraph>
      <PillButton className={"bg-[#00a5b1] text-white"}>{buttonTitle}</PillButton>
    </div>
  );
};

export default AdCard;
