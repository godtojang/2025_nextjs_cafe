import { AD_CARD_DATA } from "@/constants/AdCard";
import AdCard from "./subcomponents/AdCard";
import Heading from "../../common/typography/Heading";

const ContentsAside = () => {
  return (
    <div className={`p-5 w-full h-full bg-[#C8E2E0] flex-1/4 flex flex-col gap-10`}>
      <Heading level={4} className={"text-[#00a5b1] mb-15"}>
        조금 더 특별하고
        <br /> 따뜻한, 그런 카페베네
      </Heading>
      {AD_CARD_DATA.map((v, i) => (
        <AdCard key={i} {...v} />
      ))}
    </div>
  );
};

export default ContentsAside;
